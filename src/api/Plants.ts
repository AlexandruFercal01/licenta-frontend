import axios from 'axios'
import { PlantProps } from '../components/common/PlantCard'

export const addPlant = (plant: string) => {
    return axios.post(
        'http://localhost:3001/plants',
        { name: plant },
        {
            headers: {
                Authorization: localStorage.getItem('token'),
            },
        }
    )
}

export const getPlantByName = (plant: string) => {
    return axios.get(`http://localhost:3001/plants/${plant}`, {
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    })
}

export const getPlantsByIds = (idArray: number[]) => {
    return axios.post(`http://localhost:3001/plants/byIds`, {
        ids: idArray
    }, {
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    })
}

export const addPlantToFavourites = (id: number) => {
    return axios.post(`http://localhost:3001/favourites/${id}`,{}, {
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    })
}

export const getFavouritePlantsIds = () => {

    return axios.get('http://localhost:3001/favourites', {
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    });
}

export const deletePlantFromFavourites = (id: number) => {

    return axios.delete(`http://localhost:3001/favourites/${id}`, {
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    });
}
