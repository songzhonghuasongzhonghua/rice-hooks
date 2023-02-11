import { DependencyList } from 'react'
export type IUseAsyncEffect = (
  effect: () => AsyncGenerator<void, void, void> | Promise<void>,
  deps: DependencyList
) => void
