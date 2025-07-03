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