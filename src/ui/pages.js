import {getData } from "../api/recipeProvider.js";

export const recipes = await getData();
export const cuisines = [];
for (let i = 0; i < recipes.length; i++) {
  const cuisine = recipes[i].cuisine;

  if (!cuisines.includes(cuisine)) {
    cuisines.push(cuisine);
  }
}
export const bestRecipes=recipes.sort((a, b) => b.rating - a.rating)

export function navMenu() {
    let bodyP=document.getElementById("menuBottom")
    bodyP.innerHTML=`<ul class="nav_menu">
    <li><a  class="itmeMenu"><i class="ri-home-line"></i></a></li>
    <li><a  class="itmeMenu"><i class="ri-heart-2-line"></i></a></li>
    <li><a  class="itmeMenu"><i class="ri-search-line"></i></a></li>
   </ul>`
}
export function HomePage() {
    let bodyP=document.getElementById("bodyP")
    let container = document.createElement("div")
    container.className = "homePage"
    let h1 = document.createElement("h1")
    h1.innerText = "Welcome"
    let p1 = document.createElement("p")
    p1.innerText = "What do you want to cook today ?"
    let divCuisine = document.createElement('div')
    divCuisine.className = "c"
    for (let i = 0; i < cuisines.length; i++) {
        let btn = document.createElement("button")
        btn.innerText = cuisines[i]
        btn.className='btn'
        divCuisine.appendChild(btn)
    }
    let h2 = document.createElement("h1")
    h2.innerText = "Popular Recipes"
    let divC = document.createElement("div")
    divC.className = "cardsR"
    for (let i = 0; i < bestRecipes.length; i++) {

    let card = document.createElement("div")
    card.className = "card"

    let img = document.createElement("img")
    img.src = bestRecipes[i].image

    let title = document.createElement("p")
    title.innerText = bestRecipes[i].name
    let calories = document.createElement("span")
    calories.innerText = bestRecipes[i].caloriesPerServing + " kcal"
    if(bestRecipes[i].caloriesPerServing<400){
        calories.className = "vertC"
    }else if(bestRecipes[i].caloriesPerServing<800){
        calories.className = "orangC"
    }else{
        calories.className = "redC"
        
    }

    let rating = document.createElement("span")
    rating.className = "rating"
    rating.innerText = "⭐ " + bestRecipes[i].rating

    let infoDiv = document.createElement("div")
    infoDiv.className = "info"

    infoDiv.appendChild(calories)
    infoDiv.appendChild(rating)

    let bottomDiv = document.createElement("div")

    let icon = document.createElement("i")
    icon.className = "ri-heart-2-line"

    bottomDiv.appendChild(title)
    bottomDiv.appendChild(icon)

    card.appendChild(img)
    card.appendChild(infoDiv)   
    card.appendChild(bottomDiv)

    divC.appendChild(card)
}
    container.appendChild(h1)
    container.appendChild(p1)
    container.appendChild(divCuisine)
    container.appendChild(h2)
    container.appendChild(divC)
    bodyP.innerHTML=""
    bodyP.appendChild(container)
}



function displayRecette(){
    
}