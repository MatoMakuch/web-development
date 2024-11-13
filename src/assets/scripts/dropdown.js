function toggleDropdown() {
  const dropdown = document.querySelector('.dropdown');
  const menu = dropdown.querySelector('.dropdown-menu');

  // Toggle the 'show' class on the dropdown menu
  menu.classList.toggle('show');
  // Toggle the 'open' class on the dropdown for rotating the icon
  dropdown.classList.toggle('open');
}

// Close the dropdown when clicking outside
document.addEventListener('click', function (event) {
  const dropdown = document.querySelector('.dropdown');
  const menu = dropdown.querySelector('.dropdown-menu');

  if (!dropdown.contains(event.target)) {
    menu.classList.remove('show');
    dropdown.classList.remove('open');
  }
});
