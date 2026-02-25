import {navMenu,HomePage} from './ui/pages.js'
import {recipes} from './api/recipeProvider.js';
navMenu()
 let bodyP=document.getElementById("bodyP")
let items=document.getElementsByClassName("itmeMenu")
HomePage()
items[0].addEventListener("click",()=>{
    bodyP.innerHTML=""
    HomePage()
})
items[1].addEventListener("click",()=>{
     bodyP.innerHTML=""
})
items[2].addEventListener("click",()=>{
     bodyP.innerHTML=""
})

