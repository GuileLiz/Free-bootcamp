//Given an array and a value Y, count and print the number of array values greater than Y.
function numberGreatherThan(arr,y) {
    var counter=0;
    for (index=0;index<arr.length;index++) {
        if (arr[index]>y) {
            console.log(arr[index]);
            counter+=1;
        }
    }
    console.log(counter + " elemets is greater than " + y)
}
numberGreatherThan([2,5,3],2)

//Given an array, print the max, min and average values for that array.
function maxMinAveArr(arr) {
    var max=arr[0];
    var min=arr[0]
    var sum=0;
    for (var index=0;index<arr.length;index++) {
        sum+=arr[index];
        if(arr[index]>max){
            max=arr[index]
        }
        if(arr[index]<min){
            min=arr[index]
        }
    } 
    console.log("Average: " + sum/arr.length + " Max: "+max+" Min:"+min)
}
maxMinAveArr([1,2,3])
maxMinAveArr([6,4,5])
maxMinAveArr([8,9,7])
//Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].
function replaceNegatives(arr){
    for (index=0;index<arr.length;index++){
        if(arr[index]<0){
            arr[index]="Dojo";
        }
    }
    return arr
}
console.log(replaceNegatives( [1,2,-3,-5,5]))
//Given array, and indices start and end, remove values in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].
function removeVals(arr,x,y){
    new_arr=[]
    for (index=0;index<arr.length;index++){
        if(index<x || index>y){
            new_arr.push(arr[index])
        }
    }
    return new_arr
}
console.log(removeVals([20,30,40,50,60,70],2,4))
