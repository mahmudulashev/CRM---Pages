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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM12 21C13.1046 21 14 20.1046 14 19C14 17.8954 13.1046 17 12 17C10.8954 17 10 17.8954 10 19C10 20.1046 10.8954 21 12 21Z" fill="#0A1629"/>
</svg>

                </div>
            </div>`

            return template
}

for (let i = 0; i < employees.length; i++) {
    employeesDiv.innerHTML += addEmployee(employees[i]);
}

  const btn1 = document.getElementById("close-popup");
        const popup = document.querySelector(".popup");
        const addEmployeeBtn = document.querySelector(".add-employee");

        // Function to close the popup
        function closePopup() {
            popup.style.display = "none";
        }
        btn1.addEventListener("click", closePopup);  
        addEmployeeBtn.addEventListener("click", () => {
            popup.style.display = "block";
        });