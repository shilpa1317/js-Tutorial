
let toDos = ["project1", "project2"];

function renderToDos() {
    document.getElementById("Lists").innerHTML = toDos.map((task, i) => `
        <li class="mb-2">
            <b>${task}</b>
            <button class="btn btn-danger" onclick="deleteTask(${i})">
                Delete
            </button>
        </li>
    `).join("");
}

renderToDos();

function addNewtask() {
    let inputTaskElmt = document.getElementById("inputTask");
    let newTask = inputTaskElmt.value;

    toDos.push(newTask);
    renderToDos();
    inputTaskElmt.value = "";
}
function clearAll(){
    toDos=[]
    renderToDos()
}
function deleteTask(index){
    toDos.splice(index,1)
    renderToDos()
}
window.addEventListener('load',()=>{
    renderToDos()
})

//2

let markArray=[]
let total=0;
function addmark(){
    inputmarkElmt = document.getElementById("inputMark")
    newMark= Number(inputmarkElmt.value);
    markArray.push(newMark)
    document.getElementById("markList").innerHTML +=
        `<li class="list-group-item">${newMark}</li>`;

     inputmarkElmt.value = "";
}
function calculate() {

   let total = markArray.reduce((sum, mark) => sum + mark, 0);

    let highest = markArray.reduce((max, mark) => {
        return mark > max ? mark : max;
    });

    let lowest = markArray.reduce((min, mark) => {
        return mark < min ? mark : min;
    });

    let average = total / markArray.length;

    document.getElementById("result").innerHTML = `
        <h5>Total Marks : ${total}</h5>
        <h5>Average Marks : ${average.toFixed(2)}</h5>
        <h5>Highest Marks : ${highest}</h5>
        <h5>Lowest Marks : ${lowest}</h5>
    `;
}
function resetMarks() {

    marks = [];

    renderMarks();

    document.getElementById("result").innerHTML = "";

    document.getElementById("markInput").value = "";
}

//3
let cars = ["BMW", "Audi", "Mercedes", "Toyota", "Honda", "Hyundai"];

function search() {
    let newName = document.getElementById("inputname").value;

    if (cars.includes(newName)) {
        document.getElementById("resultC").innerHTML = "Car Found: " + newName;
    } else {
        document.getElementById("resultC").innerHTML = "Car Not Found";
    }
}
//4
let numArray = [];

function addnumber() {
    let inputNumElmt = document.getElementById("inputnum");
     newnum = Number(inputNumElmt.value);

    numArray.push(newnum);

    document.getElementById("numList").innerHTML =
        numArray.map((num) => `<li class="list-group-item">${num}</li>`).join("");

    inputNumElmt.value = "";
}

function showeven() {
    let evennum = numArray.filter((num) => num % 2 == 0);
    document.getElementById("even").innerHTML = evennum.join(", ");
}

function showodd() {
    let oddnum = numArray.filter((num) => num % 2 != 0);
    document.getElementById("Odd").innerHTML = oddnum.join(", ");
}

function clear() {
    numArray = [];
    document.getElementById("numList").innerHTML = "";
    document.getElementById("result4").innerHTML = "";
}

//5
let namesArray = []
let sortedNames = []
function addNewName(){
    inputNameElmt = document.getElementById("inputName")
    newName = inputNameElmt.value 
    namesArray.push(newName)

    document.getElementById("unSortedName").innerHTML = namesArray.map((name)=>`
        <span>${name}</span>
    `)
    inputNameElmt.value =''
}

function SortArray(){
    sortedNames = namesArray.sort()
    document.getElementById("sortedName").innerHTML = sortedNames.map((name)=>`
    <span>${name}</span>
    `)
}
function clearNames(){
    namesArray = []
    sortedNames = []
    document.getElementById("unSortedName").innerHTML = ''
    document.getElementById("sortedName").innerHTML = ''
}