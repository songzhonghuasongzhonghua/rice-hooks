const obj = {name:'szh'}

//手写call,apply、bind同理
Function.prototype.myCall = function(arg){
    let newArg = arg || window
    let args = []
    let result = ''
    newArg.func = this
    for(let i = 1; i<arguments.length;i++){
        args.push(`argument[${i}]`)
    }
    result = eval(`newArg.func(${args})`)
    newArg.func()
    delete newArg.func
    return result

}

function say(){
    console.log(this.name);
}

say.myCall(obj)