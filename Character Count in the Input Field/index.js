const description = document.getElementById("description");
const result = document.getElementById("result");
const characterLimit = 150;
result.textContent = 0 + "/" + characterLimit;


function characterCount() {
    const textLength = description.value.length;
    result.textContent = textLength + "/" + characterLimit;

    if (textLength > characterLimit) {
        description.style.borderColor ="#ff2851";
        result.style.color = "#ff2851";
    } else {
        description.style.borderColor ="#0984e3";
        result.style.color = "gray";
    }
    
}


description.addEventListener("input", characterCount);