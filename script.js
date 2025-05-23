// script.js
const cotxesGrid = document.querySelector('.cotxes-grid');
const toggleButton = document.getElementById('toggle-layout');

let isGrid = true;

toggleButton.addEventListener('click', () => {
  if (isGrid) {
    cotxesGrid.style.display = 'flex';
    cotxesGrid.style.flexDirection = 'row';
    cotxesGrid.style.flexWrap = 'wrap';
    cotxesGrid.style.justifyContent = 'center';
    toggleButton.textContent = 'Canvia a Grid';
  } else {
    cotxesGrid.style.display = 'grid';
    cotxesGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
    toggleButton.textContent = 'Canvia a Flex';
  }
  isGrid = !isGrid;
});
