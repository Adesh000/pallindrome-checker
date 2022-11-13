let inputStr = document.getElementById("string");
let Btn = document.querySelector("button");
let result = document.querySelector(".main-container > p");


const pallChecker = () => {
    let textStr = inputStr.value;
    let revStr = textStr.split("").reverse().join("");
    if (textStr === revStr) {
        result.innerHTML = "The given string is Pallindrome";
    } else {
        result.innerHTML = "The given string is not Pallindrome";
    }
};


Btn.addEventListener("click", pallChecker);
