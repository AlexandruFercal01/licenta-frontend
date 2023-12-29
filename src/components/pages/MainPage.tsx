import React, { useEffect, useState } from 'react'
import './main.styles.css'

import axios from 'axios'
import { Card, Grid, IconButton } from '@mui/material'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded'
import garden from '../assets/garden.jpg'
import { useNavigate } from 'react-router'

const BackgroundHead = {
    backgroundImage: 'url(' + garden + ')',
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
        <div className="container">
            <Card style={BackgroundHead}>
                <div className="content">
                    <h2>Hello, Alex!</h2>
                    <h2> {weather.name}</h2>
                    <h2>
                        Outside temperature:{' '}
                        {(weather.main?.temp - 273).toFixed(1)}
                        °C
                    </h2>
                </div>
            </Card>
            <Grid container className="goToContainer">
                <Card className="goToCard">
                    <h2>Go to Dashboard</h2>
                    <div
                        style={{ display: 'flex', justifyContent: 'flex-end' }}
                    >
                        <IconButton onClick={() => navigate('/dashboard')}>
                            <ArrowCircleRightRoundedIcon
                                style={{ fontSize: '70px' }}
                            />
                        </IconButton>
                    </div>
                </Card>
                <Card className="goToCard">
                    <h2>Go to My Plants</h2>
                    <div
                        style={{ display: 'flex', justifyContent: 'flex-end' }}
                    >
                        <IconButton onClick={() => navigate('/plants')}>
                            <ArrowCircleRightRoundedIcon
                                style={{ fontSize: '70px' }}
                            />
                        </IconButton>
                    </div>
                </Card>
                <Card className="goToCard">
                    <h2>Go to Plant Inspector</h2>
                    <div
                        style={{ display: 'flex', justifyContent: 'flex-end' }}
                    >
                        <IconButton onClick={() => navigate('/inspector')}>
                            <ArrowCircleRightRoundedIcon
                                style={{ fontSize: '70px' }}
                            />
                        </IconButton>
                    </div>
                </Card>
                <Card className="goToCard">
                    <h2>Go to Analytics</h2>
                    <div
                        style={{ display: 'flex', justifyContent: 'flex-end' }}
                    >
                        <IconButton onClick={() => navigate('/analytics')}>
                            <ArrowCircleRightRoundedIcon
                                style={{ fontSize: '70px' }}
                            />
                        </IconButton>
                    </div>
                </Card>
            </Grid>
        </div>
    )
}
