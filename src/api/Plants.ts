import { PlantProps } from '../components/common/PlantCard'
import { Severity, toggleAlert } from '../components/common/AlertSnackbar'
import api from './ApiService'

export const addPlant = (plant: string) => {
    return api.post(
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
    return api.get(`http://localhost:3001/plants/${plant}`, {
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    })
}

export const getPlantsByIds = (idArray: number[]) => {
    return api.post(`http://localhost:3001/plants/byIds`, {
        ids: idArray
    }, {
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    })
}

export const addPlantToFavourites = (id: number) => {
    return api.post(`http://localhost:3001/favourites/${id}`,{}, {
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    }).then((res) => {
        toggleAlert({
            open: true,
            message: res.data.message,
            severity: Severity.success,
        })
    })
}

export const getFavouritePlantsIds = () => {

    return api.get('http://localhost:3001/favourites', {
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    });
}

export const deletePlantFromFavourites = (id: number) => {

    return api.delete(`http://localhost:3001/favourites/${id}`, {
        headers: {
            Authorization: localStorage.getItem('token'),
        },
    }).then((res)=>{
        toggleAlert({
            open: true,
            message: res.data.message,
            severity: Severity.success,
        })
    });
}
