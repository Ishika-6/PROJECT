var readPageButton = document.getElementById('readFirst')
var readCurrentButton = document.getElementById('readCurrent')
var iframe = document.getElementById('myIframe');

readPageButton.addEventListener('click', ()=>{
    document.querySelector('.reading-page').style.display = "none";
    document.querySelector('.recommended-books-section').style.display = "none";
    document.querySelector('.reading-page-main-site').style.display = "flex";
    document.querySelector('.cross').style.display = "flex";
});

readCurrentButton.addEventListener('click', ()=>{
    document.querySelector('.reading-page').style.display = "none";
    document.querySelector('.recommended-books-section').style.display = "none";
    document.querySelector('.reading-page-main-site').style.display = "flex";
    document.querySelector('.cross').style.display = "flex";
});

var crossButton = document.querySelector('.cross')

crossButton.addEventListener('click', ()=>{
    document.querySelector('.reading-page').style.display = "flex";
    document.querySelector('.reading-page-main-site').style.display = "none";
    document.querySelector('.recommended-books-section').style.display = "flex";
    document.querySelector('.cross').style.display = "none";

});

const searchBarIcon = document.querySelector('.profile .fas');
const searchBar = document.querySelector('.search-bar');

searchBarIcon.addEventListener('click', () => {
    if (searchBar.style.visibility == 'hidden') {
        searchBar.style.visibility = 'visible';
    } else {
        searchBar.style.visibility = 'hidden';
    }
});
