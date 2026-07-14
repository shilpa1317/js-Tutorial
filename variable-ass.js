const { clearCache } = require("ejs");

//Number operation
let x=10;
let y=20;
let sum=  x +y ;
console.log(sum);
let sub =x - y;
console.log(sub);
let multi=x*y;
console.log(multi);
let div = x/y;
console.log(div);


//string operations
let favouriteMovie="Taare Zameen Par";
let message=" i love Watching "+ favouriteMovie;
console.log(message);

// booleans
let isHungry=true;
if(isHungry){
    console.log("go to eat!");

}else{
    console.log("you are full!");

}
//object
let FavouriteAnimal={
    name:"chotu",
    type:"dog",
    age:4,
    isfriendly:true
};
console.log(FavouriteAnimal);
console.log("Animal name is:",FavouriteAnimal.name);

//array
let color=["purple","red","yellow","pink"];
console.log(color);
color.push("brown");
console.log("after adding brown:",color);
//bigint
let bigint= 135465587809809n;
console.log(bigint);
//symbol
let scer1= Symbol("ram1");
let scer2=Symbol("ram1");
console.log(scer1==scer2);
