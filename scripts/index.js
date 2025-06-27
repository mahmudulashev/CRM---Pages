import { projects } from './data.js';
let projectCards = document.querySelector('.projects-cards');


//DASHBOARD BO'LIMIDAGI PROJECTLARNI QO'SHISH

function projectQo(project) {
    let project1 = ` <div class="projects-card">
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
                                    Created Sep 12, 2020</p>
                                <h4> <svg width="12" height="16" viewBox="0 0 12 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.6129 0.209705L6.70711 0.292893L11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711C11.3466 7.06759 10.7794 7.09532 10.3871 6.7903L10.2929 6.70711L7 3.415V15C7 15.5523 6.55228 16 6 16C5.48716 16 5.06449 15.614 5.00673 15.1166L5 15V3.415L1.70711 6.70711C1.34662 7.06759 0.779392 7.09532 0.387101 6.7903L0.292893 6.70711C-0.0675907 6.34662 -0.0953203 5.77939 0.209705 5.3871L0.292893 5.29289L5.29289 0.292893C5.65338 -0.0675907 6.22061 -0.0953203 6.6129 0.209705Z"
                                            fill="#FFBD21" />
                                    </svg> ${project.priority}</h4>
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
                                    <h5>${project.tasks.filter(task => task.progress === 'In Progress').length}</h5>
                                </span>
                                <span>
                                    <p>Assignees</p>
                                    <h5>${project.assignees.length}</h5>
                                </span>
                            </div>
                        </div>
                    </div>`;
    return project1;
}

for (let i = 0; i < 4; i++) {
    projectCards.innerHTML += projectQo(projects[i]);
}


