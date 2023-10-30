import React from 'react'
import './dashboard.styles.css'

import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import DeviceThermostatRoundedIcon from '@mui/icons-material/DeviceThermostatRounded'
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded'
import { Button, Card } from '@mui/material'

export function Dashboard() {
    return (
        <div className="container">
            <div className="sensorsTable">
                <h2>Sensors data</h2>
                <div className="cardContainer">
                    <Card className="sensorCard">
                        <div className="leftSide">
                            <h2>Temperature</h2>
                            <h1>25*C</h1>
                        </div>
                        <DeviceThermostatRoundedIcon
                            sx={{ fontSize: '100px' }}
                            className="icon"
                        />
                    </Card>
                    <Card className="sensorCard">
                        <div className="leftSide">
                            <h2>Temperature</h2>
                            <h1>25*C</h1>
                        </div>
                        <DeviceThermostatRoundedIcon
                            sx={{ fontSize: '100px' }}
                            className="icon"
                        />
                    </Card>
                    <Card className="sensorCard">
                        <div className="leftSide">
                            <h2>Humidity</h2>
                            <h1>50%</h1>
                        </div>
                        <WaterDropRoundedIcon
                            sx={{ fontSize: '100px' }}
                            className="icon"
                        />
                    </Card>
                    <Card className="sensorCard">
                        <div className="leftSide">
                            <h2>Light</h2>
                            <h1>80%</h1>
                        </div>
                        <LightModeRoundedIcon
                            sx={{ fontSize: '100px' }}
                            className="icon"
                        />
                    </Card>
                </div>
                <h2>Control </h2>
                <Button
                    sx={{
                        width: '100%',
                        backgroundColor: 'white',
                        borderRadius: '16px',
                        marginTop: '15px',
                        color: 'rgba(85, 88, 67, 0.67)',
                    }}
                >
                    Open window
                </Button>
                <Button
                    sx={{
                        width: '100%',
                        backgroundColor: 'white',
                        borderRadius: '16px',
                        marginTop: '15px',
                        color: 'rgba(85, 88, 67, 0.67)',
                    }}
                >
                    Turn fan on
                </Button>
            </div>
        </div>
    )
}
