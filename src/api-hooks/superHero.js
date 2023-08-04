import axios from 'axios'
import { useQuery, useQueryClient } from 'react-query'

//1  fetch all of superheroes data 1
export const fetchSuperHero = (onSuccess, onError) => {
    return useQuery('super-heroes',
        () => {
            return axios.get('http://localhost:4000/superheroes')
        }, {
        onSuccess,
        onError
    })
}
//3 and then give me specific data by id ,  if there is no initial data
const fetchSingleSuperHeroDetail = ({ queryKey }) => {
    const heroId = queryKey[1]
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

//2 set initial data retrieve 
export const fetchSingleSuperHero = (id) => {
    const queryClient = useQueryClient()
    return useQuery(["super-hero", id], fetchSingleSuperHeroDetail, {
        initialData: () => {
            const hero = queryClient.getQueryData('super-heroes')
                ?.data
                ?.find(hero => hero.id === parseInt(id))
            if (hero) {
                return {
                    data: hero
                }
            } else {
                return undefined
            }
        }
    })

}