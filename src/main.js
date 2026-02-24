import {navMenu,HomePage} from './ui/pages.js'
import {recipes} from './api/recipeProvider.js';
navMenu()
let items=document.getElementsByClassName("itmeMenu")
items[0].addEventListener("click",()=>{
    console.log("HomePage");
})
items[1].addEventListener("click",()=>{
    console.log("FavoritePage");
})
items[2].addEventListener("click",()=>{
    console.log("SearchPage");
})

HomePage()