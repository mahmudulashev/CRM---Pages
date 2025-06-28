document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        selectable: true,
        editable: true,
        events: [
            {
                title: 'CRM uchrashuvi',
                start: '2025-07-01'
            },
            {
                title: 'Mijoz bilan qongiroq',
                start: '2025-07-03'
            }
        ],
        dateClick: function (info) {
            const title = prompt("Voqea nomi:");
            if (title) {
                calendar.addEvent({
                    title: title,
                    start: info.dateStr,
                    allDay: true
                });
            }
        }
    });
    calendar.render();
});
