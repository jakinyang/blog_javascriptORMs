import React from "react";
export default function CheeseTableItem(props) {

  const formatIngredients = (props) => {
    const ingredientsList = props.ingredients.map(obj => {
      return(
        <li>
          {obj.ingredient}
        </li>
      )
    })
    return ingredientsList;
  }
  const formatCategories = (props) => {
    const categoriesList = props.categories.map(obj => {
      return(
        <li>
          {obj.category}
        </li>
      )
    })

    return categoriesList;
  }

  return (
    <tr>
      <td class="tg-0lax">{props.name}</td>
      <td class="tg-0lax">{props.origin}</td>
      <td class="tg-0lax"><ul>{formatCategories(props)}</ul></td>
      <td class="tg-0lax"><ul>{formatIngredients(props)}</ul></td>
    </tr>
  )
}