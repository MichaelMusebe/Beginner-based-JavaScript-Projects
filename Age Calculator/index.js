const resultEl = document.querySelector(".result");
const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");




function getAge(birthdayValue) {
  const presentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = presentDate.getFullYear() - birthdayDate.getFullYear();
  const month = presentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && presentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}

function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please select your birthday");
  } else {
    let age = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}
 
btnEl.addEventListener("click", calculateAge);
