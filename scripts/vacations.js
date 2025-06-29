
import { employees } from './data.js';
let employeesDiv = document.getElementById('employees-table');

function addEmployee(employee) {
    let template = `
            <div class="employees-name">

                <span class="employee-name">
                    <img src="${employee.img}" alt="">
                    <span>
                        <h4>${employee.name}</h4>
                        <p>${employee.email}</p>
                    </span>
                </span>

                <span>
                    <p>Vacations</p>
                    <h5>${employee.vacations}</h5>
                </span>

                <span>
                    <p>Sick Leave</p>
                    <h5>${employee.sick}</h5>
                </span>

                <span>
                    <p>Work remotely</p>
                    <h5>${employee.remotely}</h5>
                </span>

            </div>`

    return template
}

for (let i = 0; i < employees.length; i++) {
    employeesDiv.innerHTML += addEmployee(employees[i]);
}

const btn1 = document.getElementById("close-popup");
const overlay = document.querySelector('.overlay');
const popup = document.querySelector('.popup');
const addEmployeeBtn = document.querySelector(".add-employee");

function closePopup() {
    popup.classList.remove('activ');
    overlay.classList.remove('active');
}
btn1.addEventListener("click", closePopup);
addEmployeeBtn.addEventListener("click", () => {
    popup.classList.add('activ');
    overlay.classList.add('active');
});

let employeeNumber = document.querySelector('.main-h2');
employeeNumber.textContent = `Employees (${employees.length})`;

const approveForm = document.getElementById('approve-form');
const message = document.getElementById('message');

approveForm.addEventListener('submit', function (e) {
    e.preventDefault();

    message.classList.add('active');
    popup.classList.remove('activ');
    overlay.classList.remove('active');
    approveForm.reset();

    setTimeout(() => {
        message.classList.remove('active');
    }, 3000);
});



