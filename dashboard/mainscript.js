const searchBarIcon = document.querySelector('.profile .fas');
const searchBar = document.querySelector('.search-bar');

searchBarIcon.addEventListener('click', () => {
    if (searchBar.style.visibility == 'hidden') {
        searchBar.style.visibility = 'visible';
    } else {
        searchBar.style.visibility = 'hidden';
    }
});