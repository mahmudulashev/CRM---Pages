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

                <div class="more">

                </div>
            </div>`

            return template
}

for (let i = 0; i < employees.length; i++) {
    employeesDiv.innerHTML += addEmployee(employees[i]);
}