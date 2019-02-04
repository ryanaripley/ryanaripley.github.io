const filterButtons = document.querySelectorAll('.filter-button');
const filterGroup = document.getElementById('filter-group');

if (filterGroup) {
  const filterItems = filterGroup.querySelectorAll('.filter-item');

  filterButtons.forEach( button => {
    button.addEventListener('click', event => {
      event.preventDefault();
      const filterGroup = event.target.dataset.group;
      filterItems.forEach( item => {
        if (filterGroup == 'show-all') {
          item.classList.remove('filter-item-hidden');
        } else {
          const filter = item.dataset.filter;
          if (!filter.includes(filterGroup)) {
            item.classList.add('filter-item-hidden');
          } else {
            item.classList.remove('filter-item-hidden');
            //setTimeout(function(){item.classList.remove('filter-item-hidden')}, 500);
          }
        }
      });
    });
  });
};