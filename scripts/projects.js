import { projects } from './data.js';
let people = document.getElementById('people');
let container = document.querySelector('.container');


// PROJECT BO"LIMIDAGI PROJECTLARNI QO'SHISH

function projectQoshish(project) {
    let projectDiv = `<div class="current-div1 active">
                            <p>${project.pn}</p>
                            <h4>${project.name}</h4>
                            <a href="#">View details
                                <svg width="6" height="10" viewBox="0 0 6 10" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.292893 0.292893C0.653377 -0.0675907 1.22061 -0.0953203 1.6129 0.209705L1.70711 0.292893L5.70711 4.29289C6.06759 4.65338 6.09532 5.22061 5.7903 5.6129L5.70711 5.70711L1.70711 9.70711C1.31658 10.0976 0.683418 10.0976 0.292893 9.70711C-0.0675907 9.34662 -0.0953203 8.77939 0.209705 8.3871L0.292893 8.29289L3.585 5L0.292893 1.70711C-0.0675907 1.34662 -0.0953203 0.779392 0.209705 0.387101L0.292893 0.292893Z"
                                fill="#3F8CFF" />
                                </svg>
                            </a>
                        </div>`
    return projectDiv;
}

for (let i = 0; i < projects.length; i++) {
    container.innerHTML += projectQoshish(projects[i]);   
}


// PROJECT BO'LIMIDAGI TASKLARNI QO'SHISH

function qoshish(task) {
    let priorityClass = '';
    if (task.Priority === 'Medium') {
        priorityClass = 'sariq';
    } else if (task.Priority === 'Low') {
        priorityClass = 'yashil';
    }

    let progressClass = '';
    if (task.progress === 'Done') {
        progressClass = 'done';
    } else if (task.progress === 'In Progress') {
        progressClass = 'in-progress';
    } else if (task.progress === 'To Do') {
        progressClass = 'to-do'
    } else if (task.progress === 'In Review') {
        progressClass = 'in-review'
    }



    let peopleDiv = `<div class="people-div">
                <div class="name">
                    <p>Task Name</p>
                    <h4>${task.taskName}</h4>
                </div>
                <div class="name">
                    <p>Estimate</p>
                    <h4>${task.Estimate}</h4>
                </div>
                <div class="name">
                    <p>Spent Time</p>
                    <h4>${task.SpentTime}</h4>
                </div>
                <div class="name">
                    <p>Assignee</p>
                    <img style="border-radius:50px;" width="30px"
                        src="${task.Assignee}" alt="bola rasmi">
                </div>
                <div class="name">
                    <p>Priority</p>
                    <h4 class="${priorityClass}">${task.Priority}</h4>
                </div>
                <div class="tugma-div name">
                    <button class="${progressClass}">${task.progress}</button>
                </div>
                <div class="aynala name">
                    <img src="${task.progressBar}" alt="">
                </div>
        </div>`;

    return peopleDiv;
}

let html = '';
for (let i = 0; i < projects[0].tasks.length; i++) {
    html += qoshish(projects[0].tasks[i]);
}
people.innerHTML = html;



