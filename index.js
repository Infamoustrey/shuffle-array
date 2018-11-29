
// Returns a shuffled version of the array
module.exports = function (array_to_be_shuffled){

    let arr = JSON.parse( JSON.stringify(array_to_be_shuffled) )

    let x, y, i;
 
    for(i = 0; i < arr.length; i++){
        y = Math.floor( Math.random() * (i + 1) )
        x = arr[i]
        arr[i] = arr[y]
        arr[y] = x
    }

    return arr

}