import React from 'react'

const Card = ({ movies, key }) => {
    if (movies) return (
        <div key={movies.id} className='card'>
            <img src={'https://image.tmdb.org/t/p/w500' + movies.poster_path} height='150px' width='300px' />
            <h1>{movies.original_title}</h1>
            <h5>{movies.title}</h5>
            <p>{movies.overview}</p>
            <h4>Penonton : {movies.popularity}</h4>
            <button>Buy</button>
        </div>
    )
    return null
}

export default Card