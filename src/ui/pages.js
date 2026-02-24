import {getData } from "../api/recipeProvider.js";

export const recipes = await getData();
export const cuisines = recipes.map(it => it.cuisine);
export const bestRecipes=recipes.sort((a, b) => b.rating - a.rating)

export function navMenu() {
    let bodyP=document.getElementById("bodyP")
    bodyP.innerHTML=`<ul class="nav_menu">
    <li><a  class="itmeMenu"><i class="ri-home-line"></i></a></li>
    <li><a  class="itmeMenu"><i class="ri-heart-2-line"></i></a></li>
    <li><a  class="itmeMenu"><i class="ri-search-line"></i></a></li>
   </ul>`
}

export function HomePage() {
    let h1=document.createElement("h1")
    h1.innerText="Welcome"
    let p1=document.createElement("p")
    p1.innerText="What do you want to cook today ?"
    let div=document.createElement('div')
    div.className="btnLigne"
    for (let i = 0; i < cuisines.length; i++) {
       let btn=document.createElement("button")
       btn.innerText=cuisines[i]
       div.appendChild(btn)
    }
    let h2=document.createElement("h1")
    h2.innerText="Popular Recipes"
    let divC=document.createElement("div")
    divC.className="cardsR"
    for (let i = 0; i < bestRecipes.length; i++) {
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.src=bestRecipes[i].image
        let h=document.createElement("h1")
        h.innerText=bestRecipes[i].name
        div.appendChild(img)
        div.appendChild(h)
        divC.appendChild(div)
    }
    document.body.appendChild(h1)
    document.body.appendChild(p1)
    document.body.appendChild(div)
    document.body.appendChild(h2)
    document.body.appendChild(divC)
}