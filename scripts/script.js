let menuBtn = document.getElementById('nav-btn');
let sidebar = document.getElementsByClassName('sidebar')[0];
let searchBtn = document.getElementsByClassName('bx-search-alt-2')[0];

menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

searchBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});