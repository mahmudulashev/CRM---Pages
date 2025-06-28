const events = {
    '2020-09-09': { title: "Anna's Birthday", color: 'green' },
    '2020-09-16': { title: "Presentation", color: 'blue' },
    '2020-09-28': { title: "Ray's Birthday", color: 'green' }
};

const notes = {}; // Notes for each day
let currentDate = new Date(2020, 8); // September 2020

function renderCalendar() {
    const monthYear = document.getElementById("monthYear");
    const calendarGrid = document.getElementById("calendarGrid");

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDay = (firstDay.getDay() + 6) % 7;
    const totalDays = lastDay.getDate();

    monthYear.textContent = `${firstDay.toLocaleString('default', { month: 'long' })}, ${year}`;
    calendarGrid.innerHTML = '';

    for (let i = 0; i < startDay; i++) {
        const emptyDiv = document.createElement('div');
        emptyDiv.className = 'empty';
        calendarGrid.appendChild(emptyDiv);
    }

    for (let i = 1; i <= totalDays; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        dayDiv.dataset.date = dateStr;

        const dateNumber = document.createElement('div');
        dateNumber.className = 'date-number';
        dateNumber.textContent = i;
        dayDiv.appendChild(dateNumber);

        if (events[dateStr]) {
            const event = document.createElement('div');
            event.className = `event-box ${events[dateStr].color}`;
            event.textContent = events[dateStr].title;
            dayDiv.appendChild(event);
        }

        if (notes[dateStr]) {
            const note = document.createElement('div');
            note.className = 'note';
            note.textContent = notes[dateStr];
            dayDiv.appendChild(note);
        }

        dayDiv.onclick = () => openModal(dateStr);
        calendarGrid.appendChild(dayDiv);
    }
}

function changeMonth(delta) {
    currentDate.setMonth(currentDate.getMonth() + delta);
    renderCalendar();
}

let selectedDate = '';
function openModal(dateStr) {
    selectedDate = dateStr;
    document.getElementById("noteInput").value = notes[dateStr] || '';
    document.getElementById("noteDate").textContent = `Note for ${dateStr}`;
    document.getElementById("noteModal").style.display = "block";
}

function saveNote() {
    const text = document.getElementById("noteInput").value.trim();
    if (text) {
        notes[selectedDate] = text;
    } else {
        delete notes[selectedDate];
    }
    document.getElementById("noteModal").style.display = "none";
    renderCalendar();
}

window.onclick = function (event) {
    const modal = document.getElementById("noteModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

renderCalendar();
