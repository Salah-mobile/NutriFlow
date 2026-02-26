export function addFavRec(recipes){
     localStorage.setItem("favRecipes",JSON.stringify(recipes))
}
export function rechercheRec(recipe){
    let  recevF=JSON.parse(localStorage.getItem("favRecipes"))
    if(recevF==null){
        return false
    }
    if(recevF.includes(recipe)){
        return true
    }else{
        return false
    }
}
export function removeF(recipes){
   let recevF=JSON.parse(localStorage.getItem("favRecipes"))
    recevF.pop(recipes)
    for (let i = 0; i < recevF.length; i++) {
        localStorage.setItem("favRecipes",JSON.stringify(recevF[i]))
    }
}