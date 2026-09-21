function sayLouder(text) {
    console.log(text.toUpperCase());
}
sayLouder("it works");

function positivenum(numbers) {
    let positive = numbers.filter(num => num > 0);
    console.log(positive);
}
positivenum([1, -2, 4, 6, 5]);

function getpassingtests(result){
    let pass = result.filter(res=>res.grade>=10);
    console.log(pass)
}
getpassingtests([{id:1,grade:10},{id:2,grade:9},{id:3,grade:14}])

