import React, { useState } from 'react'
import { useMealContext } from '../context/meals'

function MealForm() {
  const { addMeal } = useMealContext()
  const [name, setName] = useState('')
  const [calories, setCalories] = useState('')
  const onAddMeal = e => {
    e.preventDefault()
    addMeal({ name, calories: parseInt(calories, 10) })
    setName('',
    setCalories(''))
  }
  const isFormValid = name.length > 0 && calories
  return (
    <form>
      <input name="nom" value={name} onChange={e=> setName(e.target.value)} />
      <input type="number" name="calories" value={calories} onChange={e => setCalories(e.target.value)} />
      <button type="submit" disabled={!isFormValid} onClick={onAddMeal}>Afegir</button>
    </form>
  )
} 

export default MealForm