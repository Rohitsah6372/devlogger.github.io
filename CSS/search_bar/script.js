const searchInputWrapper = document.querySelector(".search-input-wrapper")

const searchIcon = document.querySelector(".search-icon i");

const searchInput = document.querySelector("search-icon i") 

const closeItem = document.querySelector('search-input i')

searchIcon.addEventListener('click',()=>{
    searchIcon.parentElement.classList.add('change')
    searchInputWrapper.classList.add('change')


    setTimeout(()=>{
        searchInput.focus();
    },1000)
})

closeItem.addEventListener('click',()=>{
    searchIcon.parentElement.classList.remove('change')
    searchInputWrapper.classList.remove('change')
})