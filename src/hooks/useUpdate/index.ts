import { useState } from "react";
import { IuseUpdate } from "./type";
//可刷新组件的hooks
const useUpdate:IuseUpdate =() => {
    const [updateState,setUpdateState] = useState(0)
    const update =() => {
        setUpdateState(Math.random)
    }
    return {updateComponent:update}
}

export default useUpdate