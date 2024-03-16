import React from "react";
import DeviceThermostatRoundedIcon from '@mui/icons-material/DeviceThermostatRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded'
import WaterDamageRoundedIcon from '@mui/icons-material/WaterDamageRounded'

export type LoginForm = {
    email: string
    password: string
}

export type SensorsData = {
    temperature: number,
    humidity:number,
    soil_humidity: number, 
    light: number, 
    openWindow: boolean,
    fan1: boolean,
    fan2: boolean, 
    water_pump: boolean,
    timestamp: Date;
}

export type Icon = {
    temperature: JSX.Element
    soil_humidity: JSX.Element
    light: JSX.Element
    air_humidity: JSX.Element
}

export const IconType: Icon = {
    temperature: <DeviceThermostatRoundedIcon className="icon" />,
    soil_humidity: <WaterDropRoundedIcon className="icon" />,
    light: <LightModeRoundedIcon className="icon" />,
    air_humidity: <WaterDamageRoundedIcon className="icon" />,
}