  function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i +1; j <arr.length;j++){
            if(arr[i] > arr[j]){
                const middle = arr[j]
                arr[j]= arr[i]
                arr[i] = middle
            }

        }
    }

    return arr
}

const newArr = bubbleSort([1,2,5,2,4,5,56])

console.log(newArr);