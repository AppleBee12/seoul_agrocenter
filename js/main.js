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
