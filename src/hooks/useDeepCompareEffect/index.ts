import { useEffect } from "react";
import deepCompareForHooks from "../../utils/deepCompareForHooks";

export default function useDeepCompareEffect(effect:() =>void,dep:any[]){
    useEffect(() => {
        effect()
    },deepCompareForHooks(dep))
}