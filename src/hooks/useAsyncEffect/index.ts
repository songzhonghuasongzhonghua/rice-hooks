import { useEffect } from 'react'
import { IUseAsyncEffect } from './type'

const isFunction = (val: unknown): boolean => {
  return typeof val === 'function'
}
const useAsyncEffect: IUseAsyncEffect = (effect, deps) => {
  //判断是否为gengerator函数
  function isAsyncGenerator(
    val: AsyncGenerator<void, void, void> | Promise<void>
  ): val is AsyncGenerator<void, void, void> {
    return isFunction(val[Symbol.asyncIterator])
  }
  useEffect(() => {
    const asyncAction = effect()
    let cancelled = false

    async function execute() {
      //如果是gengerator函数
      if (isAsyncGenerator(asyncAction)) {
        const res = await asyncAction.next()
        if (res.done || cancelled) {
          return
        }

        //如果是promise
      } else {
        await asyncAction
      }
    }
    execute()

    return () => {
      cancelled = true
    }
  }, deps)
}

export default useAsyncEffect
