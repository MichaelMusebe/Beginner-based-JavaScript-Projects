const button = document.querySelector(".btn");
const passwordArea = document.querySelector(".password");
const copy = document.querySelector(".fa-copy");
const alertContainer = document.querySelector(".alert-container");


function createPassword() {
    const passwordCharacters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 8;

    let password = "";

    for (let index = 0; index < passwordLength; index++) {
        const randomCharacter = Math.floor(Math.random() * passwordCharacters.length);
        
        password += passwordCharacters.substring(randomCharacter, randomCharacter + 1);

        passwordArea.value = password;
        alertContainer.innerText = "copied";
    }
}



function copyPassword() {
    passwordArea.select();
    navigator.clipboard.writeText(passwordArea.value);
}

copy.addEventListener("click", () => {
    copyPassword();
    if (passwordArea.value) {
        alertContainer.classList.remove("active");
        setTimeout(() => {
        alertContainer.classList.add("active");
        }, 2000);
    }
});


button.addEventListener("click", createPassword);