//1
let name ="Silpa";
let Lastname="Landge";
console.log(name);
console.log(Lastname);
//2
let city="Pune";
console.log(city);
//3
let Fullname=name+" "+Lastname;
console.log(Fullname);
//4
let branch="computer";
console.log(`My name is ${Fullname} and i have completed by bachoeolres in ${branch},i currently live in ${city} `)
//5
const language="java";
console.log("favoutite programing language is ",language);

//6
console.log(name.length)
//7
let text="hello  welcome to my new vlog"
console.log(text.replace("vlog","blog"));
//8
console.log(name.includes("S"));

//9
console.log(text.split(" "));
//10
console.log(text.replace("vlog","blog"));

//11
let fruits=['apple','mango','banana','cherry',]
console.log(fruits.push('kiwi'));
console.log(fruits);
//12
console.log(fruits.pop('kiwi'));
console.log(fruits);
//13
console.log(fruits.shift('apple'));
console.log(fruits);
//14
let citys=['mumbai','pune','nashik']
console.log(citys.unshift("Delhi"));
console.log(citys);
//15
console.log(fruits);
console.log(citys);


//16
console.log(fruits.includes("apple"));
//17
console.log(citys.indexOf('nashik'));
//18
console.log(fruits.join(" - "))
//19
console.log(citys.reverse());
//20
let subject=['math','science','hindi','marathi','history'];
console.log(subject.reverse());

//21
let studname=['ram','sham','sita','gita','om'];
studname.forEach((name)=>{
    console.log(name);
});
//22
let num = [1, 2, 3, 4, 5,54];

num.forEach((n) => {
    console.log(n * 2);
});
//23
citys.forEach((city) => {
    console.log(city.toUpperCase());
});
//24
let square =num.map((n)=> n**2)
console.log(square);
//25
let newnum=num.map((n)=>n+5)
console.log(newnum);
//26
let lengths = fruits.map((str) => str.length);

console.log(lengths);
//27
let prices = [100, 250, 500, 1000];

let discountPrices = prices.map((price) => {
    return price - (price * 10 / 100);
});

console.log(discountPrices);
//28
let even=num.filter((n)=>n%2==0)
console.log(even);
//29
let odd=num.filter((n)=>num%2!=0)
console.log(odd);
//30
let greater50=num.filter((n)=>n>50)
console.log(greater50);
//31
let names = ["Shilpa", "Sakshi", "Riya", "Sneha", "Priya"];

let stringWithS = names.filter((name) => name.startsWith("S"));

console.log(stringWithS);
//32
let morethan5=names.filter((name)=>name.length>5)
console.log(morethan5)
//33
let positive= num.every((n)=>n>0)
console.log(positive)
//34
let score=[30.45,12,45,67];
let above35=score.every((scor)=>scor>35)
console.log(above35)
//35
let namechar3=names.every((name)=>name.length>=3)
console.log(namechar3)
//36
let div5= num.some((n)=>n%5==0)
console.log(div5)
//37
let below35=score.some((scor)=>scor<35)
console.log(below35)
//38
let pcity=citys.some((city)=>city.startsWith("p"))
console.log(pcity)
//39
let sum=num.reduce((total,n)=>total+n,0)
console.log(sum);
//40
let productofnum=num.reduce((prod,n)=>prod*n,1)
console.log(productofnum)
//41
// let largest = num.reduce((lar, n) => {
//     return n > lar ? n : lar;
// });

// console.log(largest);
//42
let smallest = num.reduce((small, n) => (n < small ? n : small));

console.log(smallest);
//43
let totalchar=fruits.reduce((total,words)=>total+words.length,0)
console.log(totalchar)
//44
let evenandDouble=num.filter((n)=>n%2==0)
.map((n)=>n*2)
console.log(evenandDouble)
//45
let res=num.filter((n)=>n>50)
.map((n)=>n+n)
console.log(res)
//46
let upercharjoin=studname.map((name)=>name.toUpperCase())
.join("-")
console.log(upercharjoin)
//47
let result = names
    .filter((name) => name.length > 4)
    .map((name) => name.length);

console.log(result);
//48
let totaleven = num
    .filter((n) => n % 2 == 0)
    .reduce((sum, n) => sum + n, 0);

console.log(totaleven);
//mini project
let Studentmarks=[35,45,67,88,90,37];
Studentmarks.forEach((marks)=>console.log(marks))
let grace=Studentmarks.map((marks)=>marks+5)
console.log(grace)
let pass = Studentmarks.filter((mark) => mark > 35);
console.log(pass);
let stdpass=Studentmarks.every((pas)=>pas)>35
console.log(stdpass)
let std90=Studentmarks.some((top)=>top>90)
console.log(std90)
let tmarks=Studentmarks.reduce((total,n)=>total+n,0)
console.log(tmarks)
let sum = Studentmarks.reduce((acc, n) => acc + n, 0);
let average = sum / Studentmarks.length;
console.log(sum);
console.log(average);
