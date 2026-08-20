const person = {};
console.log(typeof person);
// object

const student = {
    name: "Doremon",
    age: 21,
    country: "Japan"
};

console.log(student.country);
// Japan

console.log(student.age);
// 21

console.log(student["name"]);
// Doremon

student.year = "first year";
console.log(student);
// { name: 'Doremon', age: 21, country: 'Japan', year: 'first year' }

student.age = 19;
console.log(student);
// { name: 'Doremon', age: 19, country: 'Japan', year: 'first year' }

delete student.year;
console.log(student);
// { name: 'Doremon', age: 19, country: 'Japan' }

student.characters = ["Nobita", "Shizuka", "giyan", "sunio", "Doremi"];
console.log(student);

student.characters.map((ch) =>
    console.log("This is a special character in Doraemon:", ch)
);

student.address = {
    houseNo:420,
    city:"Tokyo",
    pincode:"454545"
}

console.log("Pincode", student.address.pincode)
console.log("City", student.address["city"])
console.log("house number", student["address"]["houseNo"])
student.isCartoon = true



console.log(student.greeting())
student.greet = function(){
    console.log("This is method of object student")
}

student.greet()

console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))

for(let key in student){
    console.log(key)
    console.log(student[key])
}
// for(let v of student){
//     console.log(v)
// }

console.log("--------------------")
console.log(student)
console.log("--------------------")

studentObjSTR = JSON.stringify(student)
console.log(studentObjSTR)
console.log(typeof(studentObjSTR))

newObjStudent = JSON.parse(studentObjSTR)
console.log(newObjStudent)
console.log(typeof(newObjStudent))



