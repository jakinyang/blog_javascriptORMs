import React from "react";
import CheeseTableItem from "./CheeseTableItem";

export default function CheeseTable(props) {

  const makeTableRowArray = (props) => {
    const cheeses = props.cheeses;
    const arr = cheeses.map(cheese => {
      return (
        <CheeseTableItem 
          name={cheese.name}
          origin={cheese.origin}
          categories={props.categories[cheese.id]}
          ingredients={props.ingredients[cheese.id]}
        />
      )
    })
    return arr;
  }

  const cheeseTableItemsArray = makeTableRowArray(props);
  return (
    <table className="tg">
      <thead>
        <tr>
          <th className="tg-0lax">Name</th>
          <th className="tg-0lax">Origin</th>
          <th className="tg-0lax">Category</th>
          <th className="tg-0lax">Ingredients</th>
        </tr>
      </thead>
      <tbody>
        { cheeseTableItemsArray }
      </tbody>
    </table>
  )
}