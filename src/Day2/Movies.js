import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'

const Movies = () => {
    const [state, setState] = useState([])

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c99a687890015fbe80f81d279426568d&language=en-US&page=2')
            .then(res => {
                if (res.data) {
                    setState(res.data.results)
                }
            })
            .catch(err => {
                console.log((err.message, "ini error"))
            })
    }, [])

    return (
        <div className='style'>
            <div>
                <img src={'https://awsimages.detik.net.id/community/media/visual/2021/01/25/godzilla-vs-kong_169.jpeg?w=700&q=90'} height='200px' width='100%' />
            </div>

            <div className='list'>
                {state.map(item => (
                    <div className='card'>

                        <img src={'https://image.tmdb.org/t/p/w500' + item.poster_path} height='150px' width='300px' />

                        <h1>{item.original_title}</h1>
                        <h5>{item.title}</h5>
                        <p>{item.overview}</p>
                        <h4>Penonton : {item.popularity}</h4>
                        <button>Buy</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Movies