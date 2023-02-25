// 防抖，事件隔n个时间触发，如果在n时间内人为触发，时间将重新计时触发
export default function debounce(fn,wait){
    let timer = null

    if(timer){
        clearTimeout(timer)
        timer = null
    }
    timer = setTimeout(() => {
        fn?.()
    },wait)
}