import { useRef } from "react"

//用于避免react中容易出现的闭包问题，ref可突破闭包限制
export default function useLatest<T>(value:T){
    const ref = useRef(value)
    ref.current = value
    return ref
}
