import {getData } from "../api/recipeProvider.js";
import { rechercheRec,addFavRec,removeF } from "../services/storageService.js";


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
    icon.addEventListener("click",()=>{
        if(rechercheRec( bestRecipes[i])){
            removeF(bestRecipes[i])
            icon.className="ri-heart-2-line"
        }else{
            addFavRec(bestRecipes[i])
            icon.className="ri-heart-2-fill"
        }
    })

    bottomDiv.appendChild(title)
    bottomDiv.appendChild(icon)

    card.appendChild(img)
    card.appendChild(infoDiv)   
    card.appendChild(bottomDiv)
   img.addEventListener("click", () => {
      displayRecette(bestRecipes[i])
    })
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


function displayRecette(recipes) {
    let ingredant = recipes.ingredients;
    let inst = recipes.instructions;


    // Get main container
    const bodyP = document.getElementById("bodyP");
    bodyP.innerHTML = ""; // clear previous content

    // Main recipe container
    const reciP = document.createElement("div");
    reciP.className = "recipePage"; // optional for styling
      const h1=document.createElement('h1')
      h1.innerText=recipes.name
    // Recipe image
    const img = document.createElement("img");
    img.src = recipes.image;
    
    // Container for recipe info
    const contInfo = document.createElement("div");
    contInfo.className = "recipeInfo";

    // ---------- First line: Difficulty and Cuisine ----------
    const ligne1 = document.createElement("div");
    ligne1.className = "recipeLine";

    const p1 = document.createElement("p");
    p1.innerHTML = `Difficulty: <span>${recipes.difficulty}</span>  Cuisine: <span>${recipes.cuisine}</span>`; // can replace dynamically later

    const p2 = document.createElement("p");
    p2.innerHTML = `Calories: <span>${recipes.caloriesPerServing}</span>`; // can replace dynamically later

    ligne1.appendChild(p1);
    ligne1.appendChild(p2);

    // ---------- Second line: Ingredients ----------
    const ligne2 = document.createElement("div");
    ligne2.className = "ingerC";

    const ingrT = document.createElement("h1");
    ingrT.className="Ingerdiant"
    ingrT.innerText = "Ingerdiant";

    const ulI = document.createElement("ul");
    for (let i = 0; i < ingredant.length; i++) {
        const li = document.createElement("li");
        li.innerText = ingredant[i];
        ulI.appendChild(li);
    }

    ligne2.appendChild(ingrT);
    ligne2.appendChild(ulI);

    // ---------- Third line: Instructions ----------
    const ligne3 = document.createElement("div");
    ligne3.className = "instructions";

    const insT = document.createElement("h1");
    insT.innerText = "instructions";

    const ulIT = document.createElement("ul");
    for (let i = 0; i < inst.length; i++) {
        const li = document.createElement("li");
        li.innerText = inst[i];
        ulIT.appendChild(li);
    }

    ligne3.appendChild(insT);
    ligne3.appendChild(ulIT);

    // Append all lines to info container
    contInfo.appendChild(ligne1);
    contInfo.appendChild(ligne2);
    contInfo.appendChild(ligne3);

    // Append image and info container to main container
    reciP.appendChild(h1)
    reciP.appendChild(img);
    reciP.appendChild(contInfo);

    // Add everything to body
    bodyP.appendChild(reciP);
}
function FavoritePage() {   
}
function SearchPage(){

}
