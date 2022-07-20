import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import restAPI from '../../Axios/restAPI';
import Card from '../../../Day2/Card';

const Detail = () => {
    const navigate = useNavigate()
    const [movies, setMovies] = useState(null)
    const [movieRecomendations, setmovieRecomendations] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetchingData()
    }, [])

    const fetchingData = async () => {
        try {
            const getDetail = await restAPI.get('/movie/' + id)
            if (getDetail.data) {
                setMovies(getDetail.data)
            }
            const getRecomendationsMovie = await restAPI.get(`/movie/${id}/recommendations`)
            if (getRecomendationsMovie.data) {
                setmovieRecomendations(getRecomendationsMovie.data.results)
            }
        } catch (error) {
            console.log(error.message, "ini error")
        }
    }

    const toDetail = (id) => {
        navigate('/detail/' + id)
    }
    return (
        <div>
            {movies && (
                <div className='container'>
                    <p>{movies.original_title}</p>
                    <img src={'https://awsimages.detik.net.id/community/media/visual/2021/01/25/godzilla-vs-kong_169.jpeg?w=700&q=90'} height='200px' width='100%' />
                    <p>{movies.overview}</p>
                    <h4>Penonton : {movies.popularity}</h4>
                    <button>Buy</button>
                </div>
            )}
            <div className='list'>
                {movies.Recomendations.map(movies => (
                    <div onClick={() => toDetail(movies.id)}>
                        <Card key={movies.id} movies={movies} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Detail