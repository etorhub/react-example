import React, { useState } from 'react'
import { useFetch } from './api'

function Characters() {
  const [page, setPage] = useState(1)
  const { response, error, isLoading } = useFetch(`character/?page=${page}`)

  if (isLoading) return 'loading...'
  if (error) return 'error'
  const { results = [] } = response
  return (
    <div className="row">
      {results.map(character => (
        <div className="col" key={character.id}>
          <div className="card">
            <img src={character.image} className="card-img-top" alt={character.name} />
            <div className="card-body">
              <h5 className="card-title">{character.name}</h5>
            </div>
          </div>
        </div>

      ))}
      <button onClick={() => setPage(page + 1)}>See more</button>
    </div>
  )
}

export default Characters