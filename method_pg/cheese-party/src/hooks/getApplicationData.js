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
    state.cheeses.forEach(cheese => {
      const ingredientArr = state.ingredients.filter(row => row.cheese_id === cheese.id);
      cheeseIngredients[cheese.id] = ingredientArr;
    })
    return cheeseIngredients;
  }

  const getCategoriesForCheeses = (state) => {
    const cheeseCategories = {};
    state.cheeses.forEach(cheese => {
      const categoriesArr = state.categories.filter(row => row.cheese_id === cheese.id);
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