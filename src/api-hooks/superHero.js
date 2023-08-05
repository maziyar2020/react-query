import axios from 'axios'
import { useQuery, useQueryClient, useMutation } from 'react-query'

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

////////

const addSuperHero = (hero) => {
    return axios.post('http://localhost:4000/superheroes', hero)
}

export const addSuperHeroData = () => {
    const query = useQueryClient()
    return useMutation(addSuperHero, {
        onSuccess: (data) => {
            //1 this way we gonna get 1 additional fetching request
            // query.invalidateQueries('super-heroes')

            //2 but with setQueries no fetching required
            //2 and new data will add to dom in moment
            // query.setQueryData('super-heroes', (oldQuery) =>
            //     ({ ...oldQuery, data: [...oldQuery.data, data.data] })
            // )

        },
        //3 optimistic fetching
        onMutate: async (newHero) => {
            await query.cancelQueries('super-heroes')
            const previousData = query.getQueryData('super-heroes')
            query.setQueryData('super-heroes', (oldQuery) =>
            ({
                ...oldQuery, data: [...oldQuery.data, {
                    ...newHero
                }]
            })
            )
            return previousData
        },
        onError: () => { },
        onSettled: () => {
            console.log('slm')
        },
    })
}