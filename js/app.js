const menuSection = document.getElementById('menu');
const filterBtns = document.querySelectorAll('.filter-btn');

// Print menu data
const printHTML = (data) => {
   let html = data.map(item => {
      return `
         <div class="menu-item">
            <img src="${item.img}" alt="${item.title}" class="menu-img">
            <div class="menu-info">
               <div class="menu-title">
                  <h3 class="menu-name">${item.title}</h3>
                  <p class="menu-price">$${item.price}</p>
               </div>
               <p class="menu-desc">
                  ${item.desc}
               </p>
            </div>
         </div>
      `
   });
   const print = html.join("");
   menuSection.innerHTML = print;
};


// Load initial Menu list.
window.addEventListener('DOMContentLoaded', printHTML(menu));

// Filter Menu list.
filterBtns.forEach(btn => {
   btn.addEventListener('click', (e) => {
      const category = e.currentTarget.dataset.category;
      const menuCategory = menu.filter(menuItem => {
         // to get the specific category chosen
         if (menuItem.category === category) {
            return menuItem;
         }
      });
      
      (category === 'all') ? printHTML(menu) : printHTML(menuCategory);
   });
});