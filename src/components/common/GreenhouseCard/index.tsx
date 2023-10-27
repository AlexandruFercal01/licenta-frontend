import React from 'react'
import './style.css'

//material
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import DeviceThermostatRoundedIcon from '@mui/icons-material/DeviceThermostatRounded'
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded'
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import { IconButton } from '@mui/material'

export function GreenhouseCard() {
    return (
        <div className="greenhouseCard">
            <div className="greenhouseTitle">
                <h1 style={{ marginLeft: '20px' }}>My garden</h1>
                <IconButton>
                    <MoreHorizRoundedIcon fontSize="large" />
                </IconButton>
            </div>
            <div className="greenhouseCardFooter">
                <div className="greenhouseField">
                    <div className="greenhouseIcon">
                        <LightModeRoundedIcon fontSize="large" />
                        <h4>Light</h4>
                    </div>
                    <div className="greenhouseValue">79%</div>
                </div>
                <div className="greenhouseField">
                    <div className="greenhouseIcon">
                        <DeviceThermostatRoundedIcon fontSize="large" />
                        <h4>Temp</h4>
                    </div>
                    <div className="greenhouseValue">23*C</div>
                </div>
                <div className="greenhouseField">
                    <div className="greenhouseIcon">
                        <WaterDropRoundedIcon fontSize="large" />
                        <h4>Humidity</h4>
                    </div>
                    <div className="greenhouseValue">50%</div>
                </div>
            </div>
        </div>
    )
}
