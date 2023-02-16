
//使用setTimeout实现setInterval
//setInterval 的作用是每隔一段指定时间执行一个函数，但是这个执行不是真的到了时间立即执行
//它真正的作用是每隔一段时间将事件加入事件队列中去，只有当当前的执行栈为空的时候，才能去从事件队列中取出事件执行
//所以可能会出现这样的情况，就是当前执行栈执行的时间很长，导致事件队列里边积累多个定时器加入的事件
//当执行栈结束的时候，这些事件会依次执行，因此就不能到间隔一段时间执行的效果。


export default function myInterval(fn:Function,timeout:number):{controller:boolean}{

    //控制器，可关闭定时器
    const timer = {
        controller:true
    }

    //使用递归实现定时器功能
    function interval():void{
        if(timer.controller){
            fn()
            setTimeout(interval,timeout)
        }
    }

    //启动定时器
    setTimeout(interval,timeout)
    return timer

}