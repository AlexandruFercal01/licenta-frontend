import React from 'react'
import './dashboard.styles.css'

import { Button, Card, CircularProgress, Switch } from '@mui/material'
import { SensorCard } from '../common/SensorCard'
import DeviceThermostatRoundedIcon from '@mui/icons-material/DeviceThermostatRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded'
import Co2RoundedIcon from '@mui/icons-material/Co2Rounded'
import WaterDamageRoundedIcon from '@mui/icons-material/WaterDamageRounded'
import { ControlCard } from '../common/ControlCard/indes'

const IconType: any = {
    temperature: (
        <DeviceThermostatRoundedIcon
            sx={{ fontSize: '100px' }}
            className="icon"
        />
    ),
    soil_humidity: (
        <WaterDropRoundedIcon sx={{ fontSize: '100px' }} className="icon" />
    ),
    light: <LightModeRoundedIcon sx={{ fontSize: '100px' }} className="icon" />,
    co2: <Co2RoundedIcon sx={{ fontSize: '100px' }} className="icon" />,
    air_humidity: (
        <WaterDamageRoundedIcon sx={{ fontSize: '100px' }} className="icon" />
    ),
}

export function Dashboard() {
    return (
        <div className="container">
            <div className="sensorsTable">
                <h2>Sensors data</h2>
                <div className="cardContainer">
                    <SensorCard
                        name="Temperature"
                        value={25}
                        unit_value="°C"
                        icon={IconType['temperature']}
                    />
                    <SensorCard
                        name="Light"
                        value={65}
                        unit_value="%"
                        icon={IconType['light']}
                    />
                    <SensorCard
                        name="Soil humidity"
                        value={45}
                        unit_value="%"
                        icon={IconType['soil_humidity']}
                    />
                    <SensorCard
                        name="Co2"
                        value={22}
                        unit_value="%"
                        icon={IconType['co2']}
                    />
                    <SensorCard
                        name="Air Humidity"
                        value={40}
                        unit_value="%"
                        icon={IconType['air_humidity']}
                    />
                </div>

                <h2>Control </h2>
                <div className="controlCardContainer">
                    <ControlCard name="Open Window" on />
                    <ControlCard name="Turn fan On" on />
                    <ControlCard name="Water the plants" on={false} />
                </div>
            </div>
        </div>
    )
}
