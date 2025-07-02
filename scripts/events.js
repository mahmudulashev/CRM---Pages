import { events } from "./data.js";    
let eventsContainer = document.querySelector(".events");
function renderEvents(event) {
    let eventHTML = `
    <div class="hero-right-card">
                <div style="border-left: 4px solid ${event.borderColor};">
                        <span>
                            <h4><img src="${event.icon}" alt=""> ${event.name}</h4>
                            <svg width="12" height="16" viewBox="0 0 12 16" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M6.6129 0.209705L6.70711 0.292893L11.7071 5.29289C12.0976 5.68342 12.0976 6.31658 11.7071 6.70711C11.3466 7.06759 10.7794 7.09532 10.3871 6.7903L10.2929 6.70711L7 3.415V15C7 15.5523 6.55228 16 6 16C5.48716 16 5.06449 15.614 5.00673 15.1166L5 15V3.415L1.70711 6.70711C1.34662 7.06759 0.779392 7.09532 0.387101 6.7903L0.292893 6.70711C-0.0675907 6.34662 -0.0953203 5.77939 0.209705 5.3871L0.292893 5.29289L5.29289 0.292893C5.65338 -0.0675907 6.22061 -0.0953203 6.6129 0.209705Z"
                                    fill="#FFBD21" />
                            </svg>

                        </span>

                        <span>
                            <p>${event.date}</p>
                            <h5><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.99327 4.88338C8.93551 4.38604 8.51284 4 8 4C7.44772 4 7 4.44772 7 5V8.75L7.00717 8.86975C7.04985 9.22443 7.28 9.53333 7.61538 9.67308L10.6154 10.9231L10.7256 10.9617C11.2069 11.0997 11.7258 10.858 11.9231 10.3846L11.9617 10.2744C12.0997 9.79308 11.858 9.27417 11.3846 9.07692L9 8.083V5L8.99327 4.88338Z"
                                        fill="#7D8592" />
                                </svg>

                                ${event.hour}</h5>
                            </h5>
                        </span>
                    </div>
                </div>
    `
    return eventHTML;
}

for (let i = 0; i < events.length; i++) {
    eventsContainer.innerHTML += renderEvents(events[i]);
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

const approveForm = document.getElementById('approve-form');
const message = document.getElementById('message');

approveForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const selects = popup.querySelectorAll('select');
    const category = selects[0].value;
    const priority = selects[1].value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const description = document.getElementById('description').value.trim();

    const templateEvent = { ...events[0] };
    templateEvent.name = name;
    templateEvent.date = date + ' | ' + time;
    templateEvent.hour = templateEvent.hour;
    templateEvent.description = description;

    events.push(templateEvent);

    eventsContainer.innerHTML = '';
    for (let i = 0; i < events.length; i++) {
        eventsContainer.innerHTML += renderEvents(events[i]);
    }

    message.classList.add('active');
    popup.classList.remove('activ');
    overlay.classList.remove('active');
    approveForm.reset();

    setTimeout(() => {
        message.classList.remove('active');
    }, 3000);
});


let button = document.querySelector('.button');
let ochil = document.querySelector('.ochil')
button.addEventListener('click', () => {
    if (button.classList.contains('ishla')) button.classList.remove('ishla');
    else  button.classList.add('ishla');
    if (ochil.classList.contains('hidden')) ochil.classList.remove('hidden');
    else  ochil.classList.add('hidden');
})


