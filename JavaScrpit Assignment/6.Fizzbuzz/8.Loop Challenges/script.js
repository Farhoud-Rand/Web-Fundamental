// Function to print odd numbers in specific range
function printOdd (min, max){
    if (min <= max){
        console.log("The odd numbers between [" + min +" , " + max +"] are:");
        for (var i = min ; i <= max ; i++){
            if (i % 2 != 0)
                console.log(i);
        }
    } else 
        console.log("Error: min value must be smaller or equal to max value!\n");
}
printOdd(1,20);
///////////////////////////////////////////////////////////
// Function to print the multiples of 3 decreasingly 
function printMultiplesOf3 (min, max){
    if (min <= max){
        console.log("\nThe multiples of 3 between [" + min +" , " + max +"] are:");
        for (var i = max ; i > min ; i--){
            if (i % 3 == 0)
                console.log(i);
        }
    } else 
        console.log("\nError: min value must be smaller or equal to max value!\n");
}
printMultiplesOf3 (1,100);
///////////////////////////////////////////////////////////
// Function to print sequence from starting number and 
// decreasingly according to the number of elements in 
// the sequance and the step between two numbers is 1.5  
function printSequence (start, totalNumber){
    var counter = 0;
    var sequence = [];
    var newValue = start;
    while (counter != totalNumber) {
        sequence.push(newValue);
        newValue -= 1.5;
        counter++;
    }
    console.log("\nThe sequence with 1.5 step length, start from " + start + " and has " + totalNumber + " elemnts:");
    console.log(sequence);
}
printSequence(4,6);
///////////////////////////////////////////////////////////
// Function to find summation for numbers in specific range
function summation (min, max){
    var result = 0;
    if (min <= max){
        for (var i = min ; i <= max ; i++){
            result += i;
        }
        console.log("\nThe summation for all numbers between [" + min + " , " + max + "] is: " + result + "\n");
    } else 
        console.log("\nError: min value must be smaller or equal to max value!\n");
}
summation(1,100);
///////////////////////////////////////////////////////////
// Function to find factorial for a number
function factorial (num){
    var result = 1;// 0!
    for (var i = 1 ; i <= num ; i++){
        result *= i;
    }
    console.log(num + "! = " + result);
}
factorial(12);