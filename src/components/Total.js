import React from 'react'
import { useMealContext } from '../context/meals'

function Total() {
  const { total } = useMealContext()
  return <div>mi total es: {total}</div>
}

export default Total