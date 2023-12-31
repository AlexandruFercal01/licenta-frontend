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

export function PlantInspector() {
    const [plantName, setPlantName] = useState<string>()
    const [plantArray, setPlantArray] = useState<any>([])

    const getPlant = () => {
        return axios
            .get(
                `https://perenual.com/api/species-list?key=sk-NdFz6547851e383142826&q=${plantName}`
            )
            .then((res) => setPlantArray(res.data))
    }

    useEffect(() => {
        console.log(plantArray)
    }, [plantArray])

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
                    onClick={() => getPlant()}
                >
                    <SearchRoundedIcon fontSize="large" />
                </IconButton>
            </div>
            <div style={{ marginTop: '30px', margin: '10px' }}>
                <TableContainer
                    component={Paper}
                    sx={{
                        borderRadius: '20px',
                        padding: '5px',
                        boxShadow:
                            'rgba(0 0 0 0.16) 0px 3px 6px rgba(0 0 0 0.23) 0px 3px 6px ',
                    }}
                >
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <h3>Common Name</h3>
                                </TableCell>
                                <TableCell>
                                    <h3>Image</h3>
                                </TableCell>
                                <TableCell align="right">
                                    <h3>Scientific Name</h3>
                                </TableCell>
                                <TableCell align="right">
                                    <h3>Cycle</h3>
                                </TableCell>
                                <TableCell align="right">
                                    <h3>Watering</h3>
                                </TableCell>
                                <TableCell align="right">
                                    <h3>Sunlight</h3>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {plantArray.length === 0 ? (
                                <h1 style={{ marginLeft: '10px' }}>No items</h1>
                            ) : (
                                plantArray.data.map((plant: any) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <TableRow>
                                        <TableCell>
                                            <h5>{plant.common_name}</h5>
                                        </TableCell>
                                        <TableCell>
                                            {plant.default_image?.small_url ? (
                                                <img
                                                    src={
                                                        plant.default_image
                                                            ?.small_url
                                                    }
                                                    width="200px"
                                                    height="200px"
                                                />
                                            ) : (
                                                ''
                                            )}
                                        </TableCell>
                                        <TableCell align="right">
                                            <h5>{plant.scientific_name}</h5>
                                        </TableCell>
                                        <TableCell align="right">
                                            <h5>{plant.cycle}</h5>
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
