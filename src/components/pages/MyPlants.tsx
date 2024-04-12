import React, { useEffect, useState } from 'react'
import { PlantCard, PlantProps } from '../common/PlantCard'
import { deletePlantFromFavourites, getFavouritePlantsIds, getPlantsByIds } from '../../api/Plants'
import { MyPlantsSkeleton } from '../common/Skeleton'

export function MyPlants() {
    const [favouritePlants, setFavouritePlants] = useState<PlantProps[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const fetchData = async () => {
        setIsLoading(true)
        const ids = await getFavouritePlantsIds()
        const plants = await getPlantsByIds(ids.data.map((p) => p.id))
        setFavouritePlants(plants.data as PlantProps[])
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, [])

    const onDelete = async (id: number) => {
        await deletePlantFromFavourites(id).then(()=> fetchData());
    }

    return (
        <div className="container">
            <div>
            {isLoading ? (
                <MyPlantsSkeleton />
            ) : (
                favouritePlants.map((plant) => (
                    <PlantCard
                    key={plant.id}
                    id={plant.id as number}
                    common_name={plant.common_name}
                    scientific_name={plant.scientific_name}
                    description= {plant.description}
                    watering={plant.watering}
                    watering_period={plant.watering_period}
                    watering_general_benchmark={plant.watering_general_benchmark}
                    sunlight={plant.sunlight}
                    type={plant.type}
                    origin={plant.origin}
                    dimension={plant.dimension}
                    growth_rate={plant.growth_rate}
                    maintenance={plant.maintenance}
                    medium_url={plant.medium_url}
                    pruning_month={plant.pruning_month}
                    onDelete = {() => onDelete(plant.id as number)}
                    />
                ))
            )}
            </div>
        </div>
    )
}
