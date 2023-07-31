import axios from 'axios'
import { useQuery } from 'react-query'


export const fetchSuperHero = (onSuccess, onError) => {
    return useQuery('super-heroes',
        () => {
            return axios.get('http://localhost:4000/superheroes')
        }, {
            onSuccess,
            onError
        })
}

const fetchSingleSuperHeroDetail = ({ queryKey }) => {
    const heroId = queryKey[1]
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const fetchSingleSuperHero = (id) => {
    return useQuery(["super-hero", id], fetchSingleSuperHeroDetail)
}