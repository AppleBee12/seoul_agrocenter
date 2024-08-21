const popup = document.querySelector('.popup');
const check = document.querySelector('#check');
const button = popup.querySelector('button');

button.addEventListener('click',()=>{
  if(check.checked){
    setCookie('Portfolio','SeoulAgroCenter',1);
  } else{
    delCookie('Portfolio','SeoulAgroCenter');
  }
  popup.classList.remove('show');
});

function setCookie(name,val,due){
  let date = new Date();
    date.setDate(date.getDate() + due);

    let myCookie = `${name}=${val};expires=`+date.toUTCString();
    document.cookie = myCookie;
}

function delCookie(name,val){
  let date = new Date();
    date.setDate(date.getDate() -1);

    let myCookie = `${name}=${val};expires=`+date.toUTCString();
    document.cookie = myCookie;
}

//Company=ABC, checkCookie
function checkCookie(name,val){
  if(document.cookie.search(`${name}=${val}`) === -1){
    popup.classList.add('show');
  }
}

checkCookie('Portfolio','SeoulAgroCenter');


//main-menu
let menu = document.querySelector('header .container nav');
let header = document.querySelector('header .container');

menu.addEventListener('mouseenter', () => {
    header.style.height = '635px';
});
menu.addEventListener('mouseleave', () => {
    header.style.height = '81px';
})


//search
const search_btn = document.querySelector('.search-btn');
const search = document.querySelector('#searchbox');
const search_clear = document.querySelector('.search-clear');

search_btn.addEventListener('click', () => {
    search.classList.add('active');
});

search_clear.addEventListener('click', () => {
    search.classList.remove('active');
});



//tab
const tabMenus = document.querySelectorAll('.noticewrap .tabmenu li');
const tabContents = document.querySelectorAll('.tabcontent div');

tabMenus.forEach(tabMenu => {
    tabMenu.addEventListener('click', (e) => {
        e.preventDefault();

        for (let menu of tabMenus) {
            menu.classList.remove('active');
        }
        tabMenu.classList.add('active');

        let target = tabMenu.querySelector('a').getAttribute('href');
        for (let content of tabContents) {
            content.classList.remove('active');
        }
        document.querySelector(target).classList.add('active');
    });
})




//slide
const pager = document.querySelector('.pager');
const slideIdx = 0;
