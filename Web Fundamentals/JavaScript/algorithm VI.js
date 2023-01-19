//Return the given array, after setting any negative values to zero.  For example resetNegatives( [1,2,-1, -3]) should return [1,2,0,0].
function resetNegatives(arr){
    for (index=0;index<arr.length;index++){
        if(arr[index]<0){
            arr[index]=0;
        }
    }
    return arr
}
console.log(resetNegatives([1,2,-1, -3])) //return [1,2,0,0]

//Given an array, move all values forward by one index, dropping the first and leaving a ‘0’ value at the end.  For example moveForward( [1,2,3]) should return [2,3,0].
function moveForward(arr){
    for (index=0;index<arr.length;index++){
        arr[index]=arr[index+1]
        if(index+1===arr.length){
            arr[index]=0;
        }
    }
    return arr;
}
console.log(moveForward( [1,2,3])) //return [2,3,0]

//Given an array, return an array with values in a reversed order.  For example, returnReversed([1,2,3]) should return [3,2,1].
function returnReversed(arr){
    rev_arr=[]
    for (index=0;index<arr.length;index++){
        rev_arr.unshift(arr[index]); 
    }
    return rev_arr;
}
console.log(returnReversed([1,2,3]));

//Create a function that changes a given array to list each original element twice, retaining original order.  Have the function return the new array.  For example repeatTwice( [4,”Ulysses”, 42, false] ) should return [4,4, “Ulysses”, “Ulysses”, 42, 42, false, false].\
function repeatTwice(arr){
    new_arr=[]
    for (index=0;index<arr.length;index++){
        new_arr.push(arr[index],arr[index]); 
    }
    return new_arr;
}
console.log(repeatTwice([4,"Ulysses",42,false])) 
//[4,4, “Ulysses”, “Ulysses”, 42, 42, false, false]