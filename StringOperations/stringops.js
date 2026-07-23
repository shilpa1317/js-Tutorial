// covert given str to capitalize

strpara= "small efforts today lead to big achievements tomorrow"
function convertToUpperCase(str){
    return str.toUpperCase()

}
strUpperCase= convertToUpperCase(strpara)
console.log(strUpperCase)


//convert str to lowercase
 function convertToLowerCase(str){
    return str.toLowerCase()
 }
 strLowerCase = convertToLowerCase(strpara)
 console.log(strLowerCase)

 //extract 1st word of sentense
 text = "Hello world how are you";
//  function getFirstWord(sentence) {
//     return sentence.split(" ")[0];
// }

// firststword= getFirstWord(text)
// console.log(firststword);

//letter
const extractFirstWord = (str) =>{
    return str.charAt(0)
}
Firstletter = extractFirstWord(text)
console.log(Firstletter)

//split string into an array of words

// fruitsString ='apple banana mango'
// fruitarray = fruitsString.split(" ")
// console.log(fruitarray)

const convertArrayWords = (str)=>{
    return str.split(" ")
}
arrayofWords =convertArrayWords(text)
console.log(arrayofWords)

//convert 1st letter of each word in string to uppercase


//replace space with "-"
// replace all method
function replaceSpace (str) {
    return str.replaceAll(" ", "-");
};
replacestr = replaceSpace(text)
console.log(replacestr);

function SpaceWithHypen(str){
    arrayofWords= str.split(" ")
    strWithypens = arrayofWords.join("-")
    return strWithypens

}
strWithypens = SpaceWithHypen(strpara)
console.log(strWithypens)

// check if string start and end with same character
text1 ='madam'
function matchFirstLast(str){
    firstChar = str.charAt(0)
    lastChar = str.charAt(str.length -1)
    if(firstChar == lastChar){
        return'a string start and ends with same character'
    }
    else{
        return'a string start and ends with different character'
    }

}
matchSTR = matchFirstLast(text1)
console.log(matchSTR)


//program to count no of vowels in string
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

let text2 = "aei";
let countOfVowels = countVowels(text2);

console.log(countOfVowels);

//count the number of occurance of specific character in a string
//remove all non-alphanumeric character from a string
//reverse character in string without build in function
function ReverseString(str){
    let reverse = "";
    for (let i= str.length-1;i>=0;i--){
        reverse = reverse+str[i] ;
       }
       return reverse;

}
reverseSTR= ReverseString(text)
console.log(reverseSTR)
// palindrome
function checkPalindrome(str) {
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }

    if (str == reverse) {
        console.log("Palindrome");
    } else {
        console.log("Not Palindrome");
    }
}

checkPalindrome("madam");
checkPalindrome("hello");