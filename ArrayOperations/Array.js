stud1="rahul"
stud2="onkar"
stud3="ram"

students=[]
console.log(typeof(students))//objects

fruits=['Apple','Banana','Orange','Grapes','Papaya']

console.log(fruits[0])
console.log(fruits[1])

console.log(fruits)
fruits.push("cherry")//at last index
console.log(fruits)

fruits.unshift("Mango")
console.log(fruits)

fruits.pop()//last index element
console.log(fruits)

fruits.shift()// remove 0th index element
console.log(fruits)

subfruits=fruits.slice(2,4)
console.log(subfruits)

console.log(fruits)
fruits.splice(1,0,"kiwi","Guava")//1st index number 2nd the number we want to delete and other positon we can add the elements


//indexOf()
indexnumber=fruits.indexOf("orange")//if present then positive otherwise give -1
indexN=fruits.indexOf("kiwi")

//includes()
console.log(fruits.includes("kiwi"))//return boolean values

if(!fruits.includes("orange")){
    console.log("fruits not found")
}else{
    console.log("add to cart")
}


//for of
//used insted to writing whole loop
for(val of fruits){
    console.log(val)
}//give all the fruits by sequnce


//for in
for(ind in fruits){
    console.log(ind)//return only index value by sequence
    console.log(fruits[ind])//fruits name with index value
}

console.log("---------------------------------------------")


numArray = [84, 4, 8, 21, 41, 34];
let largest = -Infinity;
let second = -Infinity;

for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] > largest) {
        second = largest;
        largest = numArray[i];
    } else if (numArray[i] != largest && numArray[i] > second) {
        second = numArray[i];
    }
}
console.log(largest);
console.log(second);
console.log("-----------------------------------------------------------")

//function to mereg twoarraywithou duplicate
// let arr1 = [11, 43, 99, 45];
// let arr2 = [23, 11, 95, 45];
// let result = [];

// function mergeArray(arr1, arr2) {
//     for (let i = 0; i < arr1.length; i++) {
//         result.push(arr1[i]);
//     }

//     for (let i = 0; i < arr2.length; i++) {
//         if (!result.includes(arr2[i])) {
//             result.push(arr2[i]);
//         }
//     }

//     return result;
// }

// console.log(mergeArray(arr1, arr2));
console.log("----------------------------------------------")
//

let arr = [10, 20, 10, 30, 20, 10];

for (let i = 0; i < arr.length; i++) {
    let count = 0;
    
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
            count++;
        }
    }

    console.log(arr[i] + " = " + count);
}
console.log("----------------------------------")
let arr1 = [11, 43, 99, 45];
let arr2 = [23, 11, 95, 45];
let duplicate = [];

function duplicateArray(arr1, arr2) {
  

    for (let i = 0; i < arr2.length; i++) {
        if (arr1.includes(arr2[i])) {
            duplicate.push(arr2[i]);
        }
    }
    return duplicate;
}
console.log(duplicateArray(arr1, arr2))