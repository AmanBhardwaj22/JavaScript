let arr = [1,5,25,632,2,456,62,44]
function FindMax(arg) {
    let MaxValue = Math.max(...arg) 
    return MaxValue
}
console.log(FindMax(arr))
