const inputElement = document.getElementById("inputPara");
const resultElement = document.getElementById("result");

function convertToUpperCase() {
    const inputValue = inputElement.value;
    const outputText = inputValue.toUpperCase();

    resultElement.textContent = outputText;
}

function convertToLowerCase() {
    const inputValue = inputElement.value;
    const outputText = inputValue.toLowerCase();

    resultElement.textContent = outputText;
}
function checkPalindrome() {
    const str = inputElement.value;
    let reverse = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reverse = reverse + str[i];
    }

    if (str === reverse) {
        resultElement.textContent = "Palindrome";
    } else {
        resultElement.textContent = "Not Palindrome";
    }
}
function countVowels() {
     const inputValue = inputElement.value;
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < inputValue.length; i++) {
        if (vowels.includes(inputValue[i])) {
            count++;
        }
    }

    resultElement.textContent = count;
}
function replaceSpace() {
     const inputValue = inputElement.value;
     const outputText = inputValue.replaceAll(" ", "-");
    resultElement.textContent = outputText;
};

function Consonants(){
    const inputValue= inputElement.value;
    let vowels ="aeiouAEIOU";
    let count = 0;

    for(let i=0;i<inputValue.length; i++){
        if( vowels.includes(inputValue[i])==false && inputValue[i] != " "){
            count++;
        }
    }
    resultElement.textContent= count;

}
function countSpaces() {
     const inputValue = inputElement.value;
    let Spaces = " ";
    let count = 0;

    for (let i = 0; i < inputValue.length; i++) {
        if (Spaces.includes(inputValue[i])) {
            count++;
        }
    }

    resultElement.textContent = count;
}
function titleCase() {
     const inputValue = inputElement.value;
    
}
function extractFirstWord(){
    const inputValue = inputElement.value;
    const outputText = inputValue.charAt(0);

    resultElement.textContent = outputText;
    
}
function ReverseCharacter(){
    const inputValue = inputElement.value;
    let reverse = "";
    for (let i= inputValue.length-1;i>=0;i--){
        reverse = reverse+inputValue[i] ;
       }

    resultElement.textContent = reverse;
    
}
function SortWords(){
    const inputValue = inputElement.value;

}

