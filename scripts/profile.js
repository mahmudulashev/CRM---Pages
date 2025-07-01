const tabs = document.querySelectorAll('.tabs-wrapper .tab');
const projectsDiv = document.querySelector('.rightings .projects1');
const teamDiv = document.querySelector('.rightings .team');
const vacationDiv = document.querySelector('.rightings .vacation');

function hideAll() {
    projectsDiv.style.display = 'none';
    teamDiv.style.display = 'none';
    vacationDiv.style.display = 'none';
}

tabs.forEach(tab => {
    tab.addEventListener('click', function() {

        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        hideAll();
        if (this.classList.contains('tab1')) {
            projectsDiv.style.display = 'block';
        } else if (this.classList.contains('tab2')) {
            teamDiv.style.display = 'block';
        } else if (this.classList.contains('tab3')) {
            vacationDiv.style.display = 'block';
        }
    });
});

hideAll();
projectsDiv.style.display = 'block';