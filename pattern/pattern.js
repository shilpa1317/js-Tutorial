//  * * * * *
//  * * * * *
//  * * * * *
//  * * * * *
//  * * * * *

n=5;
function SquarePattern(n){
    for(let i=1; i<=n;i++){
        line=''
    for(let j=1;j<=n;j++){
        line=line+" *"
    }
    console.log(line);
    }
   

}
SquarePattern(n);
console.log("-------------------------------------")

//  *
//  * *
//  * * *
//  * * * *
//  * * * * *

function rightTriangle(n){
    for(let i=1;i<=n;i++){
        line=''
        for(let j=1;j<=i;j++){
            line=line+" *"

        }
        console.log(line)
    }

}
rightTriangle(n);
console.log("------------------------------------------------")
            
//  * * * * *
//  * * * *
//  * * *
//  * *
//  *
function invertedtriangle(n){
    for(let i=n;i>=1;i--){
        line=''
        for(let j=1;j<=i;j++){
            line=line+" *"

        }
        console.log(line)
    }

}
invertedtriangle(n)
// function invertedtriangle(n){
//     for(let i=1;i<=n;i++){
//         line=''
//         for(let j=n;j>=i;j--){
//             line=line+" *"

//         }
//         console.log(line)
//     }

// }
// invertedtriangle(n)

console.log("------------------------------------------------")
//      *
//     * *
//    * * *
//   * * * *
//  * * * * *

function pyramid(n){
    for(let i=1;i<=n;i++){
        line=''
        for(let j=1;j<=n-i;j++){
            line=line+" "

        }
        for(let k=1;k<=2*i-i;k++){
                line=line+" *"
                
        }
        console.log(line)
        
    }

}
pyramid(n);
console.log("------------------------------------------------")

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *


function diamond(n) {

    for (let i = 1; i <= n; i++) {
        let line = "";

        for (let j = 1; j <= n - i; j++) {
            line += " ";
        }

        for (let k = 1; k <= 2 * i - 1; k++) {
            line += "*";
        }

        console.log(line);
    }

    
    for (let i = n - 1; i >= 1; i--) {
        let line = "";

        for (let j = 1; j <= n - i; j++) {
            line += " ";
        }

        for (let k = 1; k <= 2 * i - 1; k++) {
            line += "*";
        }

        console.log(line);
    }
}

diamond(n);
console.log("+++++++++++++++++++++++++++++++++++++++")

//     1
//    222
//   33333
//  4444444
// 555555555


    function numberPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let line = "";

        // Spaces
        for (let j = 1; j <= n - i; j++) {
            line += " ";
        }

        // Numbers
        for (let k = 1; k <= 2 * i - 1; k++) {
            line += i;
        }

        console.log(line);
    }
}

numberPyramid(n);
console.log("+++++++++++++++++++++++++++++++++++++")


//     1
//    2 2
//   3 3 3
//  4 4 4 4
// 5 5 5 5 5

function numberPyramid1(n) {
    for (let i = 1; i <= n; i++) {
        let line = "";

        // Spaces before numbers
        for (let j = 1; j <= n - i; j++) {
            line += " ";
        }

        // Numbers with spaces
        for (let k = 1; k <= i; k++) {
            line += i + " ";
        }

        console.log(line);
    }
}

numberPyramid1(n);
console.log("______________________________________")

// *****
// *   *
// *   *
// *   *
// *****
function hollowSquare(n) {
    for (let i = 1; i <= n; i++) {
        let line = "";

        for (let j = 1; j <= n; j++) {

            // Border print
            if (i == 1 || i == n || j == 1 || j == n) {
                line += "*";
            } else {
                line += " ";
            }
        }

        console.log(line);
    }
}

hollowSquare(n);