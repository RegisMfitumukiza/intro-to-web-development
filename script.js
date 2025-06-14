

function changeBackgroundColor(color){
    let section = document.getElementById('coding-journey');
    section.style.backgroundColor = color;
};

document.getElementById('intro').addEventListener('click', () => changeBackgroundColor("#2CA02C"));

document.getElementById('react').addEventListener('click', () => changeBackgroundColor("#FF7F0E"));

document.getElementById('backend').addEventListener('click', () => changeBackgroundColor("#9467BD"));


function moveToSection(sectionId) {
    let section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
};


document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.getElementById('currentYear');
    const newDate = new Date().getFullYear();
    yearElement.textContent = newDate;
});

