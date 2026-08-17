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


let arr1 = [10, 20, 30, 40];
let arr2 = [30, 40, 50, 60];

function mergeArray(arr1, arr2) {
    let result = [];
    for (let i of arr1) {
        result.push(i);
    }
    for (let i of arr2) {
        if (!result.includes(i)) {
            result.push(i);
        }
    }
    return result;
}
console.log(mergeArray(arr1, arr2));
