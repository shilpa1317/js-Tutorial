//2

const book = {
    title: "Wings of Fire",
    author: "A.P.J Abdul Kalam",
    details: {
        pages: 180,
        genre: "Biography"
    }
};

console.log(book.details.pages);
console.log(book.details.genre);


//3
const product = {
    name: "Laptop",
    price: 50000,
    stock: 20
};

for (let key in product) {
    console.log(key + " : " + product[key]);
}


//4
function getNumbers() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    return { num1, num2 };
}

function add() {
    let { num1, num2 } = getNumbers();
    document.getElementById("result").innerHTML = num1 + num2;
}

function subtract() {
    let { num1, num2 } = getNumbers();
    document.getElementById("result").innerHTML = num1 - num2;
}

function multiply() {
    let { num1, num2 } = getNumbers();
    document.getElementById("result").innerHTML = num1 * num2;
}

function divide() {
    let { num1, num2 } = getNumbers();

    if (num2 === 0) {
        document.getElementById("result").innerHTML = "Cannot divide by 0";
    } else {
        document.getElementById("result").innerHTML = num1 / num2;
    }
}


//5
const person1 = {
    name: "Shilpa",
    age: 22
};

const person2 = {
    name: "Riya",
    age: 20
};

if (person1.name === person2.name) {
    console.log("Names are same");
} else {
    console.log("Names are different");
}

if (person1.age === person2.age) {
    console.log("Ages are same");
} else if (person1.age > person2.age) {
    console.log("Person1 is older");
} else {
    console.log("Person2 is older");
}

//6
let tasks = [];

function addTask(task) {
    tasks.push(task);
}

function showTasks() {
    console.log(tasks);
}

function updateTask(index, newTask) {
    tasks[index] = newTask;
}

function deleteTask(index) {
    tasks.splice(index, 1);
}

// Testing
addTask("HTML");
addTask("CSS");
addTask("JavaScript");

showTasks();

updateTask(1, "Bootstrap");
showTasks();

deleteTask(0);
showTasks();