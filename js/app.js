const toggleNav=document.querySelector('.toggle-nav');
const sidebarOverlay=document.querySelector('.sidebar-overlay');
const closeBtn=document.querySelector('.sidebar-close');

toggleNav.addEventListener('click',function(){
  sidebarOverlay.classList.add('show');
});
closeBtn.addEventListener('click',function(){
  sidebarOverlay.classList.remove('show');
});

const cartOverlay=document.querySelector('.cart-overlay');
const closeCartBtn=document.querySelector('.cart-close');
const toggleCartBtn=document.querySelector('.toggle-cart');
toggleCartBtn.addEventListener('click',function(){
 cartOverlay.classList.add('show');
});
closeCartBtn.addEventListener('click',function(){
 cartOverlay.classList.remove('show');
});
const singleProductAddToCartBtn = getElement('.addToCartBtn');

singleProductAddToCartBtn.addEventListener('click', function() {
  cartOverlay.classList.add('show');
});

