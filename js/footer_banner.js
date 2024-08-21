let footerWidth = document.querySelector('footer .banner-wrap').clientWidth;
let parent = document.querySelector('.animation');
let items = parent.querySelectorAll('li')
let itemCount = items.length;
let itemWidth = footerWidth/itemCount;
let animation;

//console.log(itemWidth)

//클론생성 너비지정
items.forEach(item => {
  item.style.width = `${itemWidth}px`;
  let cloneItem = item.cloneNode(true);
  cloneItem.classList.add('clone');
  parent.appendChild(cloneItem);
});


//너비설정
parent.style.width = `${footerWidth *2}px`;
let currentLeft = 0;
const speed = 1;

function animateSlide(){
  currentLeft -= speed;
  if(Math.abs(currentLeft)>=footerWidth){
    currentLeft = 0;//if...footerWidth 같다면 0
  }

  parent.style.left = `${currentLeft}px`;
  animation = requestAnimationFrame(animateSlide);

  function startAnimation(){
    if(!animation){
      animateSlide();
    }
  }
  function stopAnimation(){
    if(animation){
      cancelAnimationFrame(animation);
      animation = null;
    }    
  }
  parent.addEventListener('mouseenter', stopAnimation);
  parent.addEventListener('mouseleave', startAnimation);
}
window.onload = animateSlide;