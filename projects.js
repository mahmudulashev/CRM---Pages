
import data from './data.js';
let people = document.getElementById('people')

function qoshish(data) {
    people.innerHTML += ` <div class="people-div">
                        <div class="orab-turuvchi">
                            <div class="name">
                                <p>Task Name</p>
                                <h4>${data.taskName}</h4>
                            </div>
                            <div class="data">
                                <p>Estimate</p>
                                <h4>${data.Estimate}</h4>
                            </div>
                            <div class="time">
                                <p>Spent Time</p>
                                <h4>${data.SpentTime}</h4>
                            </div>
                            <div class="text-img">
                                <p>Assignee</p>
                                <img style="border-radius:50px; margin: 5px;" width="30px"
                                    src="${data.Assignee}" alt="bola rasmi">


                            </div>
                            <div class="level">
                                <p>Priority</p>
                                <h4>${data.Priority}</h4>
                            </div>
                            <div class="tugma-div">
                                <button>${data.progress}</button>
                            </div>
                            <div class="aynala">
                                 <img src=" ${data.progressBar}" alt="">

                            </div>
                        </div>
                    </div>`
}
for (let i = 0; i < data.length; i++) {
    qoshish(data[i]);
}
