import React from 'react'
import './styles.css'

//material ui
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded'
import { IconButton } from '@mui/material'

//assets
import logo from '../../assets/logo.png'

export function Header() {
    return (
        <div className="header">
            <div className="headerName">
                <img src={logo} height="50px" />
                <div style={{ width: '10px' }} />
                <h2>Plantario</h2>
            </div>
            <IconButton
                sx={{ marginRight: '15px', color: 'black', fontSize: 'large' }}
            >
                <NotificationsNoneRoundedIcon />
            </IconButton>
        </div>
    )
}
