/* // Analyze an array’s values and return the average of its values.

function printAverage(x){
    sum = 0;
    for (var index=0;index<x.length;index++){
        sum+=x[index]    
    }
    return (sum/x.length);
}
y = printAverage([1,2,3]);
console.log(y); // should log 2
  
y = printAverage([2,5,8]);
console.log(y); // should log 5 */

//2) Create an array with all the odd integers between 1 and 255 (inclusive)

function returnOddArray(){
    arr=[];
    for (var num=1;num<=255;num+=2){
        arr.push(num);
    }
    return (arr);
 }
 y = returnOddArray();
 console.log(y); // should log [1,3,5,...,253,255]

//3) Square each value in a given array, returning that same array with changed values.

function squareValue(x){
    for (var index=0;index<x.length;index++){
        x[index]=x[index]**2;
    }
    return x;
}
y = squareValue([1,2,3]);
console.log(y); // should log [1,4,9]
y = squareValue([2,5,8]);
console.log(y); // should log [4,25,64] 