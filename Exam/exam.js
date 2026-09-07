//task1

function reverseStr(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }
  return rev;
}
console.log(reverseStr("Hello World From Wisdom Sprouts IT Training Hub"));
//task2
function countWords(text){
  text=text.tolowerCase();
  text=text.replace(/[.,!?]/g,"")
  let words =text.split(" ");
  let result={};
  for(let word of words){
    if(result[word]){
      result[word]++;
    }else{
      result[word]=1;
    }
  }
  return result;
}
console.log(countWords("hii hello welcome hi how are you "))

//task3
document.querySelector("#check").addEventListener("click", age);

function age() {
  let name = document.querySelector("#name").value;
  let userAge = Number(document.querySelector("#age").value);
  if (userAge >= 18) {
    document.querySelector("#result").innerText =
      `name:${name},age:${userAge} is eligible `;
  } else {
    document.querySelector("#result").innerText =
      `${name} is not eligible `;
  }
}
//task4
function sortProducts(products) {
    return products.sort((a, b) => a.price - b.price);
}

let products = [
    { name: "Keyboard", price: 499 },
    { name: "Monitor", price: 8999 },
    { name: "Mouse", price: 299 }
];

console.log(sortProducts(products));
//task5
function createSlug(text) {
    text = text.toLowerCase();
    text = text.replace(/[^a-z0-9 ]/g, "");
    text = text.replace(/ /g, "-");

    return text;
}

console.log(createSlug("Learn JavaScript in 30 Days!"));
//task6
function groupWords(words) {
    let result = {};

    for (let word of words) {
        let length = word.length;

        if (result[length]) {
            result[length].push(word);
        } else {
            result[length] = [word];
        }
    }

    return result;
}

console.log(groupWords(["dog", "apple", "sun", "table", "cat", "pie"]));