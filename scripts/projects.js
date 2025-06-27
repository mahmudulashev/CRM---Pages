import { data } from './data.js';
let people = document.getElementById('people');


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
    } else if (task.progress === 'In Review'){
        progressClass = 'in-review'
    }


    
      let peopleDiv =  `<div class="people-div">
            <div class="orab-turuvchi">
                <div class="name">
                    <p>Task Name</p>
                    <h4>${task.taskName}</h4>
                </div>
                <div class="data">
                    <p>Estimate</p>
                    <h4>${task.Estimate}</h4>
                </div>
                <div class="time">
                    <p>Spent Time</p>
                    <h4>${task.SpentTime}</h4>
                </div>
                <div class="text-img">
                    <p>Assignee</p>
                    <img style="border-radius:50px; margin: 5px;" width="30px"
                        src="${task.Assignee}" alt="bola rasmi">
                </div>
                <div class="level">
                    <p>Priority</p>
                    <h4 class="${priorityClass}">${task.Priority}</h4>
                </div>
                <div class="tugma-div">
                    <button class="${progressClass}">${task.progress}</button>
                </div>
                <div class="aynala">
                    <img src="${task.progressBar}" alt="">
                </div>
            </div>
        </div>`;

        return peopleDiv;
}

let html = '';
for (let i = 0; i < data.length; i++) {
    html += qoshish(data[i]);
}
people.innerHTML = html;


