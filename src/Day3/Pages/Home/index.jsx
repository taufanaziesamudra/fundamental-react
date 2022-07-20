import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../../Day2/Card'
import restAPI from '../../Axios/restAPI'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const [state, setState] = useState([])

    useEffect(() => {
        fetcingData()
    }, [])

    const fetcingData = async () => {
        try {
            const getMovies = await restAPI.get('/movie/now_playing')
            if (getMovies.data) {
                setState(getMovies.data.results)
            }
        } catch (error) {
            console.log(error.message, "ini error")
        }
    }

    const toDetail = (id) => {
        navigate('/detail' + id)
    }
    return (
        <div className='App'>
            <div className='list'>
                {state.map(movies => (
                    <div onClick={() => toDetail(movies.id)}>
                        <Card key={movies.id} movies={movies} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home