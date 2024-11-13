// assets/scripts/main.js

import { toggleDropdown } from './dropdown.js';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.dropdown-button').forEach(button => {
    button.addEventListener('click', () => {
      const dropdownId = button.getAttribute('data-dropdown-id');
      toggleDropdown(dropdownId);
    });
  });
});
