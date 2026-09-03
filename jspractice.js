const employee=[
    {name:"srushti",tasks:[
        {tittle:"Task1",completed:true},
        {tittle:"Task2",completed:false}
    ]},
    {
        name:"hiral",
        tasks:[
            {tittle:"Task1",completed:true},
            {tittle:"Task2",completed:true}
        ]
    }
];
//1
employee.forEach(emp => {
    let count = emp.tasks.filter(task => task.completed).length;
    console.log(emp.name, ":", count);
});
//2
let highestRate = 0;
let topEmployee = "";

employee.forEach(emp => {
    let completed = emp.tasks.filter(task => task.completed).length;
    let rate = completed / emp.tasks.length;

    if (rate > highestRate) {
        highestRate = rate;
        topEmployee = emp.name;
    }
});
console.log("employee with highest complection rate:",topEmployee); // hiral
//3 
employee.forEach(emp => {
    emp.tasks.push({
        title: "Task3",
        completed: false
    });
});
console.log(employee);
//4
employee.forEach(emp => {
    let allDone = emp.tasks.every(task => task.completed);
    if (allDone) {
        console.log(emp.name);
    }
}); 

