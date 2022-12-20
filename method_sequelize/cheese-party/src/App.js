import React from 'react';
import getApplicationData from './hooks/getApplicationData';
import CheeseTable from './components/CheeseTable';

function App() {
  const { state, getIngredientsForCheeses, getCategoriesForCheeses } = getApplicationData();

  const ingredients = getIngredientsForCheeses(state);
  const categories = getCategoriesForCheeses(state);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cheeses!</h1>
        <CheeseTable 
        cheeses={state.cheeses}
        ingredients={ingredients}
        categories={categories}
        />
      </header>
    </div>
  );
}

export default App;
