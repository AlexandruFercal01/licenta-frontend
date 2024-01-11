import React, { useState } from 'react'
import './styles.css'

//material ui
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded'
import { Avatar, Badge, IconButton, Popover } from '@mui/material'

//assets
import logo from '../../assets/logo.png'

export function Header() {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
        null
    )

    const open = Boolean(anchorEl)

    return (
        <div className="header">
            <div className="headerName">
                <img src={logo} height="50px" />
                <div style={{ width: '10px' }} />
                <h2>Plantario</h2>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginRight: '10px',
                }}
            >
                <IconButton
                    sx={{
                        marginRight: '15px',
                        color: 'black',
                        fontSize: 'large',
                    }}
                    onClick={(e) => {
                        setAnchorEl(e.currentTarget)
                    }}
                >
                    <Badge badgeContent={4} color="success">
                        {' '}
                        <NotificationsNoneRoundedIcon fontSize="large" />
                    </Badge>
                </IconButton>
                <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={() => {
                        setAnchorEl(null)
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    Alex are mere!
                </Popover>
                <Avatar />
            </div>
        </div>
    )
}
