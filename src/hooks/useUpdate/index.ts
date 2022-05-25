import { useState } from "react";
import { IuseUpdate } from "./type";
//可刷新组件的hooks
const useUpdate:IuseUpdate =() => {
    const [updateState,setUpdateState] = useState(0)
    const update =() => {
        setUpdateState(count => count + 1)
    }
    return {forceUpdate:update}
}

export default useUpdate