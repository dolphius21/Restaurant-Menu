const menuSection = document.getElementById('menu');
const categoryFilters = document.querySelector('.list-filters');

// Print menu data
const printHTML = (data) => {
   const menuHTML = data.map(obj => {
      return `
         <div class="menu-item">
            <img src="${obj.img}" alt="${obj.title}" class="menu-img">
            <div class="menu-info">
               <div class="menu-title">
                  <h3 class="menu-name">${obj.title}</h3>
                  <p class="menu-price">$${obj.price}</p>
               </div>
               <p class="menu-desc">
                  ${obj.desc}
               </p>
            </div>
         </div>
      `
   }).join("");
   menuSection.innerHTML = menuHTML;
};

// Display category buttons
const displayCategoryBtns = (data) => {
   // get all menu categories
   const categories = data.reduce((arr, obj) => {
      if (!arr.includes(obj.category)) {
         arr.push(obj.category);  
      }   
      return arr;
   }, ['all']);
   
   const buttons = categories.map(category => {
      return `
         <button class="filter-btn" data-category="${category}">${category}</button>
      `
   }).join("");
   
   categoryFilters.innerHTML = buttons;

   const filterBtns = categoryFilters.querySelectorAll('.filter-btn');

   // Filter Menu list.
   filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
         console.log(e.currentTarget);
         const category = e.currentTarget.dataset.category;
         const menuCategory = menu.filter(menuItem => {
            // to get the specific category targeted
            if (menuItem.category === category) {
               return menuItem;
            }
         });
         // condition if "all" is targeted 
         (category === 'all') ? printHTML(menu) : printHTML(menuCategory);
      });
   });
}

// Load initial Menu list.
window.addEventListener('DOMContentLoaded', () => {
   displayCategoryBtns(menu);
   printHTML(menu);
});

