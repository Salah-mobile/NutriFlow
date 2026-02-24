export async function getData() {
    try {
        const response = await fetch("https://dummyjson.com/recipes");
        const data = await response.json();
        const recipes = data.recipes;
        return recipes;

    } catch (error) {
        console.log(error);
        return [];
    }
}
export const recipes=await getData()
export const cuisines=recipes.map(it=>it.cuisine)


