let years, months, days;
function calculateAge() {
    let d = new Date();
    let age = document.querySelector(".age-input input").value;
    years = d.getFullYear() - parseInt(age.split("-")[0]);
    if (d.getMonth() + 1 >= parseInt(age.split("-")[1])) {
        months = d.getMonth() + 1 - parseInt(age.split("-")[1]);
    } else {
        years--;
        months = 12 + d.getMonth() + 1 - parseInt(age.split("-")[1]);
    };
    if (d.getDate() >= parseInt(age.split("-")[2])) {
        days = d.getDate() - parseInt(age.split("-")[2]);
    } else {
        months--;
        days = 30 + d.getDate() - parseInt(age.split("-")[2]);
    };
    if (months < 0) {
        months = 11;
        years--;
    }
    if (years < 0) {
        document.querySelector(".your-age").innerHTML = "Invalid Date";
    } else {
        document.querySelector(".your-age").innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months and <span>${days}</span> days old`;
    }
};