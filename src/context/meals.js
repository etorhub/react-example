import React, { useState, useContext, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';


export const MealContext = React.createContext();

export const MealsContextProvider = ({ children }) => {
  const [cachedMeals, setCachedMeals] = useLocalStorage('meals')
  const [meals, setMeals] = useState(cachedMeals || [])

  useEffect(() => {
    setCachedMeals(meals)
  }, [meals, setCachedMeals])

  const deleteMeal = meal => {
    setMeals(meals.filter(m => m.name !== meal))
  }
  const addMeal = meal => {
    setMeals([...meals, meal])
  }

  const total = meals.reduce((acc, meal) => acc + meal.calories, 0)

  return (
    <MealContext.Provider value={{ total, meals, addMeal, deleteMeal }}>
      {children}
    </MealContext.Provider>
  );
}

export const MealContextConsumer = MealContext.Consumer
export const useMealContext = () => useContext(MealContext)

export default MealsContextProvider