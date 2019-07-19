function akanName() {
    var input = document.getElementById('birth').value;
    var d = new Date(input);
    var CC, MM, YY;
    if (!!d.valueOf()) {
        YY = d.getFullYear();
        MM = d.getMonth();
        CC = d.getDate();
    } else { /* Invalid date */ }
    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var female = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];
    var dayCalculate = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10))) % 7;
    dayCalculate = dayCalculate;
    var gender = document.getElementById('genders').value;
    console.log(dayCalculate);
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
        alert(" You born on  " + dayOfTheWeek[dayCalculate] + " Your Akan name is " + male[dayCalculate]);

    }
    if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value;
        alert(" You born on " + dayOfTheWeek[dayCalculate] + " Your Akan name is " + female[dayCalculate]);
    }
}
