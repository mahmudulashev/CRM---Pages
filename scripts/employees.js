import { employees } from './data.js';
let employeesDiv = document.getElementById('employees-table');

function addEmployee(employee, index) {
    let template = `
            <div class="employees-name" data-index="${index}">
               
                <span class="employee-name">
                    <img src="${employee.img}" alt="">
                    <span>
                        <h4>${employee.name}</h4>
                        <p>${employee.email}</p>
                    </span>
                </span>

                <span>
                    <p>Gender</p>
                    <h5>${employee.gender}</h5>
                </span>

                <span>
                    <p>Birthday</p>
                    <h5>${employee.birthday}</h5>
                </span>

                <span>
                    <p>Full age</p>
                    <h5>${employee.fullAge}</h5>
                </span>

                <span>
                    <p>Position</p>
                    <h5>${employee.position}</h5>
                </span>

                <span>
                    <p class="hero-card-level">${employee.level}</p>
                </span>

                <div class="more" style="position: relative; cursor: pointer; color: red;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path fill-rule="evenodd" clip-rule="evenodd" d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z" fill="#0A1629"/>
                    </svg>
                    <div class="delete-popup" style="display:none; position:absolute; background:#fff; border:1px solid #ccc; padding:4px 10px; border-radius:4px; top:30px; right:0; z-index:10; cursor:pointer; font-size:14px;">Delete</div>
                </div>
            </div>`

    return template
}

function renderEmployees() {
    employeesDiv.innerHTML = '';
    for (let i = 0; i < employees.length; i++) {
        employeesDiv.innerHTML += addEmployee(employees[i], i);
    }
    addDeleteListeners();
    employeeNumber.textContent = `Employees (${employees.length})`;
}

function renderHeroCards() {
    heroCards.innerHTML = '';
    for (let i = 0; i < employees.length; i++) {
        heroCards.innerHTML += activeEmployee(employees[i]);
    }
}

function addDeleteListeners() {
    const moreBtns = document.querySelectorAll('.employees-name .more');
    moreBtns.forEach((btn, idx) => {
        const deletePopup = btn.querySelector('.delete-popup');
        btn.onclick = function(e) {
            e.stopPropagation();
            document.querySelectorAll('.delete-popup').forEach(p => { if(p !== deletePopup) p.style.display = 'none'; });
            deletePopup.style.display = deletePopup.style.display === 'block' ? 'none' : 'block';
        };
        deletePopup.onclick = function(e) {
            e.stopPropagation();
            employees.splice(idx, 1);
            renderEmployees();
            renderHeroCards();
            employeeNumber.textContent = `Employees (${employees.length})`;
        };  
    });
    document.body.onclick = function(e) {
        if (!e.target.closest('.more')) {
            document.querySelectorAll('.delete-popup').forEach(p => p.style.display = 'none');
        }
    };
}

document.addEventListener('DOMContentLoaded', function() {
    renderEmployees();
    renderHeroCards();
});

function activeEmployee(employee) {
    let template = `<div class="hero-card">
                    <div class="hero-card-div">
                        <img src="${employee.img}" alt="">
                        <h3>${employee.name}</h3>
                        <p>${employee.position}</p>
                        <p class="hero-card-level">${employee.level}</p>
                    </div>

                    <div class="hero-card-bottom">
                        <div>
                            <h3>${employee.backlog}</h3>
                            <p>Backlog tasks</p>
                        </div>

                        <div>
                            <h3>${employee.tasks}</h3>
                            <p>Tasks In Progress</p>
                        </div>

                        <div>
                            <h3>${employee.tasksInReview}</h3>
                            <p>Tasks In Review</p>
                        </div>
                    </div>


                </div>`
    return template
}

const heroCards = document.querySelector('.hero-cards');

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

    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('name').value.trim();
    const level = document.getElementById('level').value;


    const templateEmployee = { ...employees[0] };
    templateEmployee.name = `${firstName} ${lastName}`;
    templateEmployee.email = email;
    templateEmployee.level = level;
    templateEmployee.img = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png';


    employees.push(templateEmployee);
    renderEmployees();
    renderHeroCards();
    employeeNumber.textContent = `Employees (${employees.length})`;

    message.classList.add('active');
    popup.classList.remove('activ');
    overlay.classList.remove('active');
    approveForm.reset();

    setTimeout(() => {
        message.classList.remove('active');
    }, 3000);
});



