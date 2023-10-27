import React from 'react'
import './styles.css'

import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded'
import { IconButton } from '@mui/material'

export function Header() {
    return (
        <div className="header">
            <h2>Plantario</h2>
            <IconButton>
                <NotificationsNoneRoundedIcon />
            </IconButton>
        </div>
    )
}
