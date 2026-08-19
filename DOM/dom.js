let modeBtn= document.querySelector("#mode");
let currentmode="light";
modeBtn.addEventListener("click",()=>{
    if (currentmode==="light"){
            currentmode="dark";
            document.querySelector("body").style.backgroundColor="black"
    }
            else{
                currentmode="light"
                            document.querySelector("body").style.backgroundColor="white"
        }
    
})