import React from 'react'
import { useMealContext } from '../context/meals'

function MealsList() {
  const { meals, deleteMeal } = useMealContext()
  return (
    <ul>
      {meals.map(meal => <li key={meal.name}>{meal.name}<button onClick={() => deleteMeal(meal.name)}>(x)</button></li>
      )}
    </ul>
  )
}

export default MealsList