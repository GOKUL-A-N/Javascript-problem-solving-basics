// Program 1 -> Program to print Fizz and Buzz
function printFizzAndBuzz(){
    for(let i=1;i<=100;i++){
        if(i % 3 === 0 && i % 5 ===0) console.log("FizzBuzz");
        else if(i % 5 === 0) console.log("Buzz");
        else if(i % 3 === 0) console.log("Fizz");
        else console.log(i);
    }
}

//Program 2 -> function to check if a given string is a palindrome
function isPalindrome(str){
    let l = 0 , r = str.length-1;
    while(l < r){
        if(str.charAt(l) !== str.charAt(r)) return false;
        else {
            l++;
            r--;
        }
    }
    return true;
}

//Program 3 -> function to identify the greatest number in the array
function largest(arr){
    let largest = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(largest < arr[i]) largest = arr[i];
    }
    return largest;
}

// Program 4 -> function to find numberOfOccurance of each character in a string
function numberOfOccuranceOfCharacter(str){
    let obj = {}
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)  in obj) {
            obj[str.charAt(i)]++;
        }

        else
            obj[str.charAt(i)] = 1;
        
    }
    console.log(obj)
}

// program 5 -> function to take string as input and return the longest word in it
function largestWord(str){
    let arr = str.split(' ');
    let index = 0;
    let size = arr[0].length
    for(let i = 1; i < arr.length; i++){
        if(arr[i].length > size){
            index = i;
            size = arr[i].length;
        }
    }
    return arr[index];
}

// Program 6 -> function to print factorial
function factorial(num){
    if(num <= 0) return num;
    if(num == 1) return 1;
    return num * factorial(num-1);
}

// Program 7 -> function to convert celsius to fahrenheit
function fahrenheitConverter(num){
    console.log("Fahrenheit value is " + (((9/5) * num)+32));
}

// Program 8 -> function to find missing element in array
function findMissingElementInTheArray(arr){
    for(let i = 0; i < arr.length; i++){
        if(i !== arr[i]){
            console.log("Missing element is " + i);
            return;
        }
    }
    console.log("Missing element is" + arr.length);
}



// printFizzAndBuzz();
// console.log(isPalindrome("mommom") ? console.log("Palindrome") : console.log("Not a palindrome"));
// let arr = [1,2,3,44,5,6,7,8];
// console.log("largest number in the array is "+largest(arr));
// numberOfOccuranceOfCharacter("Hello world!");
// console.log("Longest word is "+largestWord("Hello world!"));
// console.log("Factorial is "+factorial(4));
// fahrenheitConverter(32)
let arr = [0,1,2,3,4,5,6,8,9]
findMissingElementInTheArray(arr);