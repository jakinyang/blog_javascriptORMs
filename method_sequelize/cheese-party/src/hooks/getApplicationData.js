import axios from 'axios';
import { useEffect, useState } from 'react';


export default function getApplicationData() {
  const [state, setState] = useState({
    cheeses: [],
    ingredients: [],
    categories: [],
  });
  useEffect(() => {
    Promise.all([
      axios.get('/api/cheeses'),
      axios.get('/api/ingredients'),
      axios.get('/api/categories')
    ])
      .then((res) => {
        console.log("Axios GET request response data: ", res);
        setState({
          cheeses: res[0].data,
          ingredients: res[1].data,
          categories: res[2].data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const getIngredientsForCheeses = (state) => {
    const cheeseIngredients = {};
    state.ingredients.forEach(cheese => {
      const ingredientArr = cheese.Ingredients.map(ingredient => ingredient.name);
      cheeseIngredients[cheese.id] = ingredientArr;
    })
    return cheeseIngredients;
  }

  const getCategoriesForCheeses = (state) => {
    const cheeseCategories = {};
    state.categories.forEach(cheese => {
      const categoriesArr = cheese.Categories.map(category => category.name);
      cheeseCategories[cheese.id] = categoriesArr;
    })
    return cheeseCategories;
  }

  return {
    state,
    getIngredientsForCheeses,
    getCategoriesForCheeses
  }
}