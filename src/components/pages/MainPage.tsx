import React, { useEffect, useState } from 'react'
import './main.styles.css'

import axios from 'axios'
import { Card, Grid, IconButton, Skeleton } from '@mui/material'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded'
import { useNavigate } from 'react-router'
import chart from '../assets/chart.png'
import dashboard from '../assets/dashboard.png'
import plant from '../assets/plants.png'
import search from '../assets/loupe.png'
import farmer from '../assets/planting.png'

const BackgroundHead = {
    borderRadius: '16px',
    margin: '20px',
}

export function Main() {
    const [weather, setWeather] = useState<any>([])

    const navigate = useNavigate()

    const getWeather = () => {
        return axios
            .get(
                'https://api.openweathermap.org/data/2.5/weather?lat=45.75372&lon=21.22571&appid=297ceff3de951e346b67d6f59d9ca9c1'
            )
            .then((res) => setWeather(res.data))
    }

    useEffect(() => {
        getWeather()
    }, [])

    return (
        <>
            <div className="container">
                <Card style={BackgroundHead}>
                    <div className="content">
                        <div>
                            <h1>
                                <b>Bine ai revenit!</b>
                            </h1>
                            <h2> {weather.name}</h2>
                            {weather.main?.temp !== undefined ? (
                                <h2>
                                    Temperatura de afara:
                                    {(weather.main?.temp - 273).toFixed(1)}
                                    °C
                                </h2>
                            ) : (
                                <>
                                    <Skeleton />
                                    <Skeleton />
                                </>
                            )}
                        </div>
                        <img
                            src={farmer}
                            width={'230px'}
                            height={'230px'}
                            style={{ marginRight: '30px' }}
                        />
                    </div>
                </Card>
                <Grid container className="goToContainer">
                    <Card className="goToCard">
                        <h2>Catre Panoul de Control</h2>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <img
                                src={dashboard}
                                width={'100px'}
                                height={'100px'}
                                style={{ marginLeft: '30px' }}
                            />
                            <IconButton onClick={() => navigate('/dashboard')}>
                                <ArrowCircleRightRoundedIcon
                                    style={{ fontSize: '70px' }}
                                />
                            </IconButton>
                        </div>
                    </Card>
                    <Card className="goToCard">
                        <h2>Catre Plantele Mele</h2>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <img
                                src={plant}
                                width={'100px'}
                                height={'100px'}
                                style={{ marginLeft: '30px' }}
                            />
                            <IconButton onClick={() => navigate('/plants')}>
                                <ArrowCircleRightRoundedIcon
                                    style={{ fontSize: '70px' }}
                                />
                            </IconButton>
                        </div>
                    </Card>
                    <Card className="goToCard">
                        <h2>Catre Oracolul de Plante</h2>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <img
                                src={search}
                                width={'100px'}
                                height={'100px'}
                                style={{ marginLeft: '30px' }}
                            />
                            <IconButton onClick={() => navigate('/inspector')}>
                                <ArrowCircleRightRoundedIcon
                                    style={{ fontSize: '70px' }}
                                />
                            </IconButton>
                        </div>
                    </Card>
                    <Card className="goToCard">
                        <h2>Catre Statistici</h2>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <img
                                src={chart}
                                width={'100px'}
                                height={'100px'}
                                style={{ marginLeft: '30px' }}
                            />
                            <IconButton onClick={() => navigate('/analytics')}>
                                <ArrowCircleRightRoundedIcon
                                    style={{ fontSize: '70px' }}
                                />
                            </IconButton>
                        </div>
                    </Card>
                </Grid>
            </div>
        </>
    )
}
