const searchBar = document.querySelector('.search-bar');
const searchIcon = document.createElement('i');
searchIcon.classList.add('fas', 'fa-search', 'search-icon');
searchBar.insertBefore(searchIcon, searchBar.firstChild);

searchIcon.addEventListener('click', () => {
  searchBar.classList.toggle('active');
});