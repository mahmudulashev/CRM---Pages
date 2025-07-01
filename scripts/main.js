

let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let activity = document.querySelector('.activity');
let employeesTable = document.querySelector('.employees-table')

btn.addEventListener("click", function() {
    btn.classList.add("active");
    btn1.classList.remove("active");
    activity.classList.add('ua');
    employeesTable.classList.remove('ua')
});

btn1.addEventListener("click", function() {
    btn1.classList.add("active");
    btn.classList.remove("active");
    employeesTable.classList.add('ua');
    activity.classList.remove('ua')
});



