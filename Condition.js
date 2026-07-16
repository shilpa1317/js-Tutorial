//if,else if ,else


let age =18;
if (age>0 && age<=100){
if (age<18){
    console.log("you are minor");

}else if(age === 18){
    console.log("you just became an adult!");
} else{
    console.log("you are an adult");

}
}else{
    console.log("invalid");
}

//Switch statement
let day =3;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wedenesday");
        break;

    default:
        console.log("invalid day");

}

//for loop
for( let i=1;i<=5;i++){
    console.log("iteration:",i);
}

//while loop
let count = 1;
while(count <=3){
    console.log("Count:",count);
    count++;
}

// do while
let num =5 ;
do{
    console.log("number :",num);
    num--;
}while(num > 0);

//l
