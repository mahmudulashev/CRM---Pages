import { employees, projects } from './data.js';

let projectBtn = document.querySelector('.project-btn');
let teamBtn = document.querySelector('.team-btn');
let vacationsBtn = document.querySelector('.vacations-btn');

let projectDiv = document.querySelector('.project');
let teamDiv = document.querySelector('.team');
let vacationsDiv = document.querySelector('.vacations');
let heroLeftTopInfo = document.querySelector('.hero-left-top-info');
let settingsBtn = document.querySelector('.settings-btn');
let buttonBack = document.querySelector('.button-back');
let settings = document.querySelector('.settings');
let heroLeft = document.querySelector('.hero-left');

projectBtn.addEventListener('click', () => {
    projectBtn.classList.add('active');
    teamBtn.classList.remove('active');
    vacationsBtn.classList.remove('active');
    projectDiv.style.display = 'flex';
    teamDiv.style.display = 'none';
    vacationsDiv.style.display = 'none';
    heroLeftTopInfo.style.opacity = '1';
});

teamBtn.addEventListener('click', () => {
    projectBtn.classList.remove('active');
    teamBtn.classList.add('active');
    vacationsBtn.classList.remove('active');
    projectDiv.style.display = 'none';
    teamDiv.style.display = 'flex';
    vacationsDiv.style.display = 'none';
    heroLeftTopInfo.style.opacity = '0';
});

vacationsBtn.addEventListener('click', () => {
    projectBtn.classList.remove('active');
    teamBtn.classList.remove('active');
    vacationsBtn.classList.add('active');
    projectDiv.style.display = 'none';
    teamDiv.style.display = 'none';
    vacationsDiv.style.display = 'flex';
    heroLeftTopInfo.style.opacity = '0';
});

settingsBtn.addEventListener('click', () => {
    settings.style.display = 'flex';
    heroLeft.style.display = 'none';
    settingsBtn.style.display = 'none';
});

buttonBack.addEventListener('click', () => {
    settings.style.display = 'none';
    heroLeft.style.display = 'block';
    settingsBtn.style.display = 'flex';
});

function getEmployees(employee) {
    let template = `<div class="hero-card">
                            <img id="hero-card-img" src="${employee.img}" alt="">
                            <h3>${employee.name}</h3>
                            <p>${employee.position}</p>
                            <p class="hero-card-level">${employee.level}</p>
                        </div>`

    return template;
}

for (let i = 0; i < employees.length; i++) {
   teamDiv.innerHTML += getEmployees(employees[i]); 
}   

function getProjects(project) {
    let template = `
    <div class="projects-card">
                            <div class="card-left">
                                <div class="card-left-top">
                                    <img src="./assets/other-photos/Image.svg" alt="">
                                    <span>
                                        <p>${project.pn}</p>
                                        <h4>${project.name}</h4>
                                    </span>
                                </div>

                                <div class="card-left-bottom">
                                    <p><svg width="18" height="20" viewBox="0 0 18 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M4 1C4 0.447715 4.44772 0 5 0C5.55228 0 6 0.447715 6 1V2H12V1C12 0.447715 12.4477 0 13 0C13.5523 0 14 0.447715 14 1V2C16.2091 2 18 3.79086 18 6V16C18 18.2091 16.2091 20 14 20H4C1.79086 20 0 18.2091 0 16V6C0 3.79086 1.79086 2 4 2V1ZM12 4C12 4.55228 12.4477 5 13 5C13.5523 5 14 4.55228 14 4L14.1493 4.00549C15.1841 4.08183 16 4.94564 16 6V7H2V6L2.00549 5.85074C2.08183 4.81588 2.94564 4 4 4C4 4.55228 4.44772 5 5 5C5.55228 5 6 4.55228 6 4H12Z"
                                                fill="#7D8592" />
                                        </svg>
                                        Created ${project.created}</p>
                                    <h4> <svg width="12" height="16" viewBox="0 0 12 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.6129 0.209705L6.70711 0.292893L11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711C11.3466 7.06759 10.7794 7.09532 10.3871 6.7903L10.2929 6.70711L7 3.415V15C7 15.5523 6.55228 16 6 16C5.48716 16 5.06449 15.614 5.00673 15.1166L5 15V3.415L1.70711 6.70711C1.34662 7.06759 0.779392 7.09532 0.387101 6.7903L0.292893 6.70711C-0.0675907 6.34662 -0.0953203 5.77939 0.209705 5.3871L0.292893 5.29289L5.29289 0.292893C5.65338 -0.0675907 6.22061 -0.0953203 6.6129 0.209705Z"
                                                fill="#FFBD21" />
                                        </svg> High</h4>
                                </div>
                            </div>

                            <div class="card-right">
                                <h4>Project Data</h4>
                                <div>
                                    <span>
                                        <p>All tasks</p>
                                        <h5>${project.tasks.length}</h5>
                                    </span>
                                    <span>
                                        <p>Active Task</p>
                                        <h5>5</h5>
                                    </span>
                                    <span>
                                         <p>Assignees</p>
                                    <h5><div class="avatar-container">
                                    <div class="avatar avatar-1"><img src="${employees[0].img}" alt=""></div>
                                    <div class="avatar avatar-2"><img src="${employees[1].img}" alt=""></div>
                                    <div class="avatar avatar-3"><img src="${employees[2].img}" alt=""></div>
                                    <div class="avatar avatar-more">+2</div>
                                   </div></h5>
                                    </span>
                                </div>
                            </div>
                        </div>
    `

    return template;
}

for (let i = 0; i < projects.length; i++) {
    projectDiv.innerHTML += getProjects(projects[i]);
}