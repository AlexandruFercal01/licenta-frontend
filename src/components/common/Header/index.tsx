import React, { Dispatch, SetStateAction, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles.css'

//material ui
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded'
import {
    Avatar,
    Badge,
    Button,
    Divider,
    IconButton,
    Popover,
    Typography,
} from '@mui/material'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

//assets
import logo from '../../assets/logo.png'
import farmer from '../../assets/farmer.png'
import { useNotificationContext } from '../../context/notificationContext'

type HeaderProps = {
    isMenuOpen: boolean
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

export function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
    const [notificationAnchor, setnotificationAnchor] =
        useState<HTMLButtonElement | null>(null)
    const [profileAnchor, setProfileAnchor] =
        useState<HTMLButtonElement | null>(null)

    const { notificationCount, notifications, clearNotifications} = useNotificationContext();

    const openNotifications = Boolean(notificationAnchor)
    const openProfile = Boolean(profileAnchor)
    const navigate = useNavigate()

    return (
        <div className="header">
            <div className="headerName">
                <img src={logo} height="50px" />
                <div style={{ width: '10px' }} />
                <h2 className="title">Plantario</h2>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    margin: '10px',
                }}
            >
                <IconButton
                    className="menuBtn"
                    sx={{
                        margin: '0 5px',
                        color: 'black',
                        fontSize: 'large',
                    }}
                    onClick={() => {
                        setIsMenuOpen(!isMenuOpen)
                    }}
                >
                    <MenuRoundedIcon fontSize="large" />
                </IconButton>
                <IconButton
                    sx={{
                        margin: '0 5px',
                        color: 'black',
                        fontSize: 'large',
                    }}
                    onClick={(e) => {
                        setnotificationAnchor(e.currentTarget)
                    }}
                >
                    <Badge badgeContent={notificationCount} color="success">
                        <NotificationsNoneRoundedIcon fontSize="large" />
                    </Badge>
                </IconButton>
                <Popover
                    open={openNotifications}
                    anchorEl={notificationAnchor}
                    onClose={() => {
                        setnotificationAnchor(null)
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
                    <div className="notificationsPopover">
                       {
                        notificationCount > 0 ?
                           notifications.map((notification, index) => (
                               <div>
                               <Typography variant="h6">
                                   <b>{notification.title}</b>
                               </Typography>
                               <p>
                                   {notification.message}
                               </p>
                               <Divider />
                           </div>

                           )) : <p>No new notifications</p>
                       }
                       <Button onClick={() => clearNotifications()}> Clear Notifications</Button>
                    </div>
                </Popover>
                <IconButton
                    onClick={(e) => {
                        setProfileAnchor(e.currentTarget)
                    }}
                >
                    <Avatar src={farmer} />
                </IconButton>
                <Popover
                    open={openProfile}
                    anchorEl={profileAnchor}
                    onClose={() => {
                        setProfileAnchor(null)
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    sx={{ borderRadius: '16px' }}
                >
                    <div className="profilePopover">
                        <div
                            style={{
                                width: '90%',
                                paddingLeft: '25px',
                                paddingRight: '25px',
                            }}
                        >
                            <Avatar sx={{ margin: '10px' }} src={farmer}>
                                A
                            </Avatar>
                            <p>alex@gmail.com</p>
                        </div>
                        <Button
                            variant="contained"
                            style={{ margin: '10px', marginLeft: 'auto' }}
                            color="success"
                            onClick={() => {
                                navigate('/login')
                            }}
                        >
                            <LogoutRoundedIcon /> Deconectare
                        </Button>
                    </div>
                </Popover>
            </div>
        </div>
    )
}
