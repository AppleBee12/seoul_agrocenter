let footerwidth = document.querySelector('footer .banner-wrapper').clientWidth;
let parent = document.querySelector('.animation');
let items = parent.querySelectorAll('li')
let itemCount = items.length;
let itemWidth = bodyWidth/itemCount;

//클론생성 너비지정
items.forEach(item=>{
  item.style.width = `${itemWidth}px`;
  let cloneItem = item.cloneNode(true);
  cloneItem.classList.add('clone');
  parent.appendChild(cloneItem);
})


//너비설정
parent.style.width = `${footerwidth *2}px `;
let currentLeft = 0;
const speed = 3;

function animateSlide(){
  currentLeft -= speed;
  //if...footerwidth와 같다면 0


  parent.style.left = `${currentLeft}px`;
  requestAnimationFrame(animateSlide);
}
window.onload = animateSlide;