import React from 'react'
import './dashboard.styles.css'

import { SensorCard } from '../common/SensorCard'
import DeviceThermostatRoundedIcon from '@mui/icons-material/DeviceThermostatRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded'
import WaterDamageRoundedIcon from '@mui/icons-material/WaterDamageRounded'
import { ControlCard } from '../common/ControlCard/indes'
import { Button } from '@mui/material'
import { toggleNotification } from '../common/Notification'
import { Notifications } from 'react-push-notification'

type Icon = {
    temperature: JSX.Element
    soil_humidity: JSX.Element
    light: JSX.Element
    air_humidity: JSX.Element
}

const IconType: Icon = {
    temperature: <DeviceThermostatRoundedIcon className="icon" />,
    soil_humidity: <WaterDropRoundedIcon className="icon" />,
    light: <LightModeRoundedIcon className="icon" />,
    air_humidity: <WaterDamageRoundedIcon className="icon" />,
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
