export default function deepCompareForHooks(dep:any[]):any[] {
    if(!dep.length){
        return []
    }
    return dep.map((item,_) => {
        if(typeof item === 'object'){
            return JSON.stringify(item)
        }
        if(typeof item === 'function'){
            return JSON.stringify(item)
        }
        return item
    })
    
}