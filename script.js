const searchBox = document.querySelector('.searchBox');
const searchBtn = document.querySelector('.searchBtn');
const recipeContainer = document.querySelector('.recipe-container');
const recipeDetailscontent = document.querySelector('.recipe-details-content');
const recipeCloseBtn = document.querySelector('.recipe-close-btn');

const fetchRecipes = async (query) => {
    recipeContainer.innerHTML = "<h2>Fetching Recipes...</h2>";

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await response.json();

        if (data.meals) {
            // If there are meals in the response, display them
            recipeContainer.innerHTML = '';
            data.meals.forEach(meal => {
                const mealElement = document.createElement('div');
                mealElement.classList.add('meal');

                // Customize this to show desired information, e.g. name, image
                mealElement.innerHTML = `
                    <h3>${meal.strMeal}</h3>
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
                `;

                recipeContainer.appendChild(mealElement);
            });
        } else {
            // If no meals found, display a message
            recipeContainer.innerHTML = "<h2>No recipes found. Try another search.</h2>";
        }
    } catch (error) {
        // Handle any errors that occur during the fetch
        recipeContainer.innerHTML = "<h2>Error fetching recipes. Please try again later.</h2>";
        console.error('Error fetching recipes:', error);
    }
};

    recipeContainer.innerHTML = "";
    response.meals.forEach(meal => {
        const recipeDiv = document.createElement('div');
        recipeDiv.classList.add('recipe');
        recipeDiv.innerHTML = `
        <img src="${meal.strMealThumb}">
        <h3>${meaL.strMeal}</h3>
        <p><span>${meal.strArea}</span> Dish</p>
        <p>Belongs  to <span>${meal.strCategory}</span> Category</p>

        `
        const button = document.createElement('button');
        button.textContent = "View Recipe";
        recipeDiv.appendChild(button);

        button.addEventListener('click', () => {
            openRecipePopup(meal);
        });

        recipeContainer.appendChild(recipeDiv);
    });
    //console.log(response);

searchBtn.addEventListener('click',(e) => {
    e.preventDefault();
    const searchInput = searchBox.ariaValueMax.trim();
    fetchRecipes();
    console.log("Button Clicked");
});
