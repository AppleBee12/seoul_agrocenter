const mSlideWrapper = document.querySelector('.sl-wrapper');
const mSlideContainer = mSlideWrapper.querySelector('.sl-container');
const mSlides = mSlideWrapper.querySelectorAll('.slide');
const mPager = mSlideWrapper.querySelector('.pager');
const mSlideCount = mSlides.length;
let mCurrentIdx = 0;
let mTimer;
let mPagerHTML = '';

// pager 생성
mSlides.forEach((item, idx) => {
  mPagerHTML += `<a href="#">${idx + 1}</a>`;
  item.style.left = `${idx * 100}%`;
});
mPager.innerHTML = mPagerHTML;

const mPagerBtn = mPager.querySelectorAll('a');

mPagerBtn.forEach((pager, idx) => {
  pager.addEventListener('click', (e) => {
    e.preventDefault();
    showSlide(idx);
  });

  pager.addEventListener('mouseenter', () => {
    clearInterval(mTimer);
  });
  
  pager.addEventListener('mouseleave', () => {
    autoSlide();
  });
});




function showSlide(num) {
  if (mCurrentIdx === num) return;
  let currentSlide = mSlides[mCurrentIdx];
  let nextSlide = mSlides[num];

  currentSlide.animate([{ left: '0%' }, { left: '-100%' }], { duration: 300, fill: 'forwards' });
  nextSlide.animate([{ left: '100%' }, { left: '0%' }], { duration: 300, fill: 'forwards' });

  mCurrentIdx = num;

  updatePager();
}

function updatePager() {
  mPagerBtn.forEach((pager) => pager.classList.remove('active'));
  mPagerBtn[mCurrentIdx].classList.add('active');
}

updatePager();

function autoSlide() {
  mTimer = setInterval(() => {
    let nextIdx = (mCurrentIdx + 1) % mSlideCount;
    showSlide(nextIdx);
  }, 5000);
}

autoSlide();