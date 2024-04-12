import React, { useEffect, useState } from 'react'
import './plantinspector.styles.css'

import {
    IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
} from '@mui/material'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import axios from 'axios'
import { addPlantToFavourites, getFavouritePlantsIds, getPlantByName } from '../../api/Plants'
import PlantNotFound from '../assets/plant_not_found.png'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { toggleAlert } from '../common/AlertSnackbar'

export function PlantInspector() {
    const [plantName, setPlantName] = useState<string>()
    const [plantArray, setPlantArray] = useState<any>([])

    return (
        <div className="container">
            <div className="searchBar">
                <TextField
                    className="searchBarInput"
                    sx={{ borderRadius: '200px' }}
                    placeholder="Search a plant"
                    onChange={(e) => {
                        setPlantName(e.target.value)
                    }}
                    color="success"
                    variant="standard"
                ></TextField>
                <IconButton
                    className="searchBarButton"
                    onClick={() => getPlantByName(plantName).then((res)=> setPlantArray(res))}
                >
                    <SearchRoundedIcon fontSize="large" />
                </IconButton>
            </div>
            <div style={{ marginTop: '30px', margin: '10px' }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        borderRadius: '20px',
                        boxShadow:
                            'rgba(0 0 0 0.16) 0px 3px 6px rgba(0 0 0 0.23) 0px 3px 6px ',
                    }}
                >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    style={{
                                        position: 'sticky',
                                        left: 0,
                                        background: 'white',
                                        zIndex: '9999 !important',
                                    }}
                                >
                                    <h3>Denumire comuna</h3>
                                </TableCell>
                                <TableCell>
                                    <h3>Imagine</h3>
                                </TableCell>
                                <TableCell align="right">
                                    <h3>Nume stiintific</h3>
                                </TableCell>
                                <TableCell align="right">
                                    <h3>Apa</h3>
                                </TableCell>
                                <TableCell align="right">
                                    <h3>Soare</h3>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {plantArray.length === 0 ? (
                                <TableCell
                                    style={{
                                        position: 'sticky',
                                        left: 0,
                                        background: 'white',
                                        zIndex: '9999 !important',
                                    }}
                                >
                                    <h2 style={{ marginLeft: '10px' }}>
                                        Nu exista plante
                                    </h2>
                                </TableCell>
                            ) : (
                                plantArray.data.map((plant: any) => ( 
                                    <TableRow>
                                        <TableCell
                                            style={{
                                                position: 'sticky',
                                                left: 0,
                                                background: 'white',
                                                zIndex: '9999 !important',
                                            }}
                                        >
                                            <h5>{plant.common_name}</h5>
                                            <IconButton onClick={()=> addPlantToFavourites(plant.id)}><FavoriteRoundedIcon/></IconButton>
                                        </TableCell>
                                        <TableCell>
                                            {plant.medium_url ? (
                                                <img
                                                    src={
                                                        plant.medium_url
                                                    }
                                                    width="200px"
                                                    height="200px"
                                                />
                                            ) : (
                                                <div className='noImage'>
                                                <img
                                                    src={
                                                        PlantNotFound
                                                    }
                                                    width="100px"
                                                    height="100px"
                                                />
                                                <h5>Imagine inexistenta</h5>
                                                </div>
                                            )}
                                        </TableCell>
                                        <TableCell align="right">
                                            <h5>{plant.scientific_name}</h5>
                                        </TableCell>
                                        <TableCell align="right">
                                            <h5>{plant.watering}</h5>
                                        </TableCell>
                                        <TableCell align="right">
                                            <h5>{plant.sunlight}</h5>
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}
