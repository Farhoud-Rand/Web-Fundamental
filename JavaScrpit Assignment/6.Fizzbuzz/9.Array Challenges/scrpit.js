// Function #1: Always Hungry
function alwaysHungry(arr) {
    var flag = 0; // To check if the food exist one time at least
    var output ="";
    arr.forEach(element =>{
        if (element == "food"){
            flag = 1;
            output += "yummy, ";
        }
    });
    if (flag == 0){
        console.log("I'm hungry");
    } else {
        output = output.substring(0, output.length - 2); // Remove the last two characters
        console.log(output);
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
//===================================================================
// Function #2: High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    arr.forEach(element => {
        if (element > cutoff)
            filteredArr.push(element);
    });
    return filteredArr;
}
var result2 = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result2); // we expect back [6, 8, 10, 9]
//===================================================================
// Function #3: Better than average
function betterThanAverage(arr) {
    var sum = 0;
    arr.forEach(element => {
        sum+=element;
    });
    // calculate the average
    var avg = sum / arr.length;
    var count = 0;
    // count how many values are greated than the average
    arr.forEach(element => {
        if (element >= avg)
            count++;
    });
    return count;
}
var result3 = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result3); // we expect back 4
//===================================================================
// Function #4: Array Reverse
function reverse(arr) {
    var reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]);
    }
    return reversedArray;
}
var result4 = reverse(["a", "b", "c", "d", "e"]);
console.log(result4); // we expect back ["e", "d", "c", "b", "a"]
//===================================================================
// Function #5: Fibonacci Array
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    var count = 2;
    while (count != n) {
        fibArr[count] = fibArr[count-1] + fibArr[count-2];
        count++;
    }
    return fibArr;
}  
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]