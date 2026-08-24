const generateotpBtn = document.querySelector("#generateOTP");
const otpBox = document.querySelector("#otpinput");
const VerifyOtpBtn= document.querySelector('#VerifyOtp')
inputOneElmt = document.querySelector("#inputOne")
inputTwoElmt = document.querySelector("#inputTwo")
inputThreeElmt = document.querySelector("#inputThree")
inputFourElmt = document.querySelector("#inputFour")
let OTP='';
let userOTP='';

generateotpBtn.addEventListener("click", () => {
  OTP = Math.floor(Math.random() * 9000) + 1000;
   console.log(OTP);
  otpBox.innerText = OTP;
});
const toNextInput = (oninput) => {
    console.log(oninput);
    document.getElementById(oninput).focus();
};
userOTP='';
VerifyOtpBtn.addEventListener("click",()=>{
    userOTP=inputOneElmt.value+inputTwoElmt.value+inputThreeElmt.value+inputFourElmt.value
    if(userOTP== OTP){
        alert(" Correct OTP");
        window.location.href = "home.html";
    }else{
        alert("Incorrect OTP")
        userOTP="";
    inputOneElmt.value = "";
    inputTwoElmt.value = "";
    inputThreeElmt.value = "";
    inputFourElmt.value = "";
       
    }
    
})
