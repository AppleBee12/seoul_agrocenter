//weather api icon https://openweathermap.org/img/wn/10d@2x.png



//search
const search_btn = document.querySelector('.search-btn')
const search = document.querySelector('.search')

search_btn.addEventListener('click',()=>{
 search.classList.toggle('active');
});