const lengthElmt = document.querySelector("#length");
const resultElmt = document.querySelector("#result");
const generateBtn = document.querySelector("#generatepass");
const togglePasswordElmt = document.querySelector("#togglePassword");
const includeNumbersElmt = document.querySelector("#includeNumbers");
const includeUppercaseElmt = document.querySelector("#includeUppercase");
const includeSpecialElmt = document.querySelector("#includeSpecial");
const excludeAmbiguousElmt = document.querySelector("#excludeAmbiguous");
const strengthTextElmt = document.querySelector("#strengthText");


generateBtn.addEventListener("click", () => {
    let characters = "abcdefghijklmnopqrstuvwxyz";
    if (includeUppercaseElmt.checked)
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbersElmt.checked)
        characters += "0123456789";
    if (includeSpecialElmt.checked)
        characters += "@!#$%&*?";
    if (excludeAmbiguousElmt.checked)
        characters = characters.replace(/[IlLOo01]/g, "");
     let password = "";
    const len = Number(lengthElmt.value);
    for (let i = 0; i < len; i++) {
        const random = Math.floor(Math.random() * characters.length);
        password += characters[random];
    }
    resultElmt.value = password;
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[@!#$%&*?]/.test(password)) score++;

    if (score <= 1) {
        strengthTextElmt.textContent = "Weak";
        strengthTextElmt.style.color = "red";
    } else if (score == 2) {
        strengthTextElmt.textContent = "Medium";
        strengthTextElmt.style.color = "orange";
    } else if (score == 3) {
        strengthTextElmt.textContent = "Good";
        strengthTextElmt.style.color = "blue";
    } else {
        strengthTextElmt.textContent = "Strong";
        strengthTextElmt.style.color = "green";
    }
});


togglePasswordElmt.addEventListener("change", () => {
    resultElmt.type = togglePasswordElmt.checked ? "text" : "password";
});