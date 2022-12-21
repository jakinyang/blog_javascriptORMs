import React from "react";
export default function CheeseTableItem(props) {

  const formatIngredients = (props) => {
    const ingredientsList = props.ingredients.map(ingredient => {
      return(
        <li>
          {ingredient}
        </li>
      )
    })
    return ingredientsList;
  }
  const formatCategories = (props) => {
    const categoriesList = props.categories.map(category => {
      return(
        <li>
          {category}
        </li>
      )
    })

    return categoriesList;
  }

  return (
    <tr>
      <td className="tg-0lax">{props.name}</td>
      <td className="tg-0lax">{props.origin}</td>
      <td className="tg-0lax"><ul>{formatCategories(props)}</ul></td>
      <td className="tg-0lax"><ul>{formatIngredients(props)}</ul></td>
    </tr>
  )
}