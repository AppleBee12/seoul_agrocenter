const slideWrapper = document.querySelector('.slide_wrapper');
const slideContainer = slideWrapper.querySelector('.slides');
const slides = slideContainer.querySelectorAll('li');
const slideCount = slides.length;

let currentIdx = 0;
const slideWidth = 460;
const slideGap = 10;
const maxSlides = 3;
const prevBtn = slideWrapper.querySelector('.prev');
const nextBtn = slideWrapper.querySelector('.next');

//복사본 생성 for of문
let slidesHTML = slideContainer.innerHTML;
let clonedSlidesHTML = slidesHTML.replace(/<li>/g, '<li class="clone">');
slideContainer.innerHTML = clonedSlidesHTML + slideContainer.innerHTML;
slideContainer.innerHTML += clonedSlidesHTML;

const allSlideCount = slideContainer.querySelectorAll('li').length;
/*
  for (let slide of slides){
    let cloneSlide = slide.cloneNode(true); //deep copy
    cloneSlide.classList.add('clone');
    slideContainer.appendChild(cloneSlide);
  }

// 슬라이드를 복사하여 추가하는 함수 function cloneSlides() { // 슬라이드 목록을 innerHTML로 가져옵니다. let slidesHTML = slideContainer.innerHTML; // 복사된 슬라이드에 clone 클래스를 추가합니다. let clonedSlidesHTML = slidesHTML.replace(/<li>/g, '<li class="clone">'); // 앞부분에 5개 추가 slideContainer.innerHTML = clonedSlidesHTML + slideContainer.innerHTML; // 뒷부분에 5개 추가 slideContainer.innerHTML += clonedSlidesHTML; } // 함수 실행 cloneSlides();

*/


//슬라이드 전체 너비 반영
/*460x7+10*6 ul길이*/
slideContainer.style.width = (slideWidth * allSlideCount) + (slideGap * (allSlideCount - 1)) + 'px';
let moveAmount = (slideWidth + slideGap) * slideCount;
slideContainer.style.transform = `translateX(-${moveAmount}px)`;

//이동함수
//moveSlide

function moveSlide(num) {
  //마지막(7번)일때는 2번으로 변경해야하고
  //처음-5번일때는 0번으로 변경하기

  slideContainer.style.left = `${-num * (slideWidth + slideGap)}px`;
  currentIdx = num;
  // console.log(currentIdx); 인덱스번호 처음-5번,마지막이 7번 임을 확인함!
  //마지막(7번)일때는 2번으로 변경해야하고
  //처음-5번일때는 0번으로 변경하기

 //마지막(7번)일때는 2번으로 변경하기시작
  if (currentIdx === slideCount * 2 - maxSlides) {
    setTimeout(() => {
      slideContainer.classList.remove('animated');
      slideContainer.style.left = `-${(num-slideCount)*(slideWidth+slideGap)}px`;
      currentIdx = num-slideCount;
    }, 500);

    setTimeout(() => {
      slideContainer.classList.add('animated');
    }, 600);
  };

  //처음-7번일때는 0번으로 변경하기
  if (currentIdx === -slideCount) {
    setTimeout(() => {
      slideContainer.classList.remove('animated');
      slideContainer.style.left = '0px';
      currentIdx = 0;
    }, 500);

    setTimeout(() => {
      slideContainer.classList.add('animated');
    }, 600);
  };
};



moveSlide(0);


nextBtn.addEventListener('click', () => {
  moveSlide(currentIdx + 1)
});
prevBtn.addEventListener('click', () => {
  moveSlide(currentIdx - 1)
});

window.addEventListener('keydown', (e) => {
  //  console.log(e.key);
  if (e.key === 'ArrowRight') {
    moveSlide(currentIdx + 1)
  }
  if (e.key === 'ArrowLeft') {
    moveSlide(currentIdx - 1)
  }
});


