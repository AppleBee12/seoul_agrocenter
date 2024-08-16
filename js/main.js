//search
const search_btn = document.querySelector('.search-btn')
const search = document.querySelector('#searchbox')

search_btn.addEventListener('click',()=>{
  
 search.classList.toggle('active');
});

