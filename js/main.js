//search
const search_btn = document.querySelector('.search-btn')
const search = document.querySelector('#searchbox')
const search_clear = document.querySelector('.search-clear')

search_btn.addEventListener('click',()=>{
 search.classList.add('active');
});

search_clear.addEventListener('click',()=>{
    search.classList.remove('active');
   });


//slide
const pager = document.querySelector('.pager');
const slideIdx = 0;
