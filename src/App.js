import React from 'react';
import './App.css';
import MealsContextProvider from './context/meals'
import MealForm from './components/MealForm';
import Total from './components/Total';
import MealsList from './components/MealsList';

function App() {
  return (
    <MealsContextProvider>
      <MealForm />
      <MealsList />
      <Total />
    </MealsContextProvider>
  );
}

export default App;
