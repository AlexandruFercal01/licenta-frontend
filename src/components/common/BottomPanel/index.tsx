import React from 'react'
import './styles.css'
import { IconButton } from '@mui/material'

import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded'
import GrassRoundedIcon from '@mui/icons-material/GrassRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import { useNavigate } from 'react-router-dom'

export function BottomPanel() {
    const navigate = useNavigate()

    return (
        <div className="bottomPanel">
            <IconButton
                onClick={() => {
                    navigate('/')
                }}
            >
                <HomeRoundedIcon sx={{ color: 'white' }} />
            </IconButton>
            <IconButton
                onClick={() => {
                    navigate('/dashboard')
                }}
            >
                <SpeedRoundedIcon sx={{ color: 'white' }} />
            </IconButton>
            <IconButton
                onClick={() => {
                    navigate('/plants')
                }}
            >
                <GrassRoundedIcon sx={{ color: 'white' }} />
            </IconButton>
            <IconButton
                onClick={() => {
                    navigate('/inspector')
                }}
            >
                <SearchRoundedIcon sx={{ color: 'white' }} />
            </IconButton>
            <IconButton
                onClick={() => {
                    navigate('/analytics')
                }}
            >
                <BarChartRoundedIcon sx={{ color: 'white' }} />
            </IconButton>
        </div>
    )
}
