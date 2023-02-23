import { useEffect } from "react";
import useLatest from "../useLatest";

export default function useUnmount(fn:() => void){
    const fnRef = useLatest(fn)
    useEffect(() => {
        return () => {
            fnRef.current()
        }
    },[])
}