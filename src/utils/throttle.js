//节流：一个事件在n个时间内被处罚m次，仅会执行一次，可用于搜索、登录、注册按钮等等
export default function throttle(fn,delay){
    let flag = false 

    if(!flag){
        return 
    }
    flag = true

    setTimeout(() => {
        fn?.()
        flag = false
    },delay)

}