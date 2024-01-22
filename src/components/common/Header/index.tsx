import React from 'react'
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

//assets
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

export function Header() {
    const [notificationAnchor, setnotificationAnchor] =
        React.useState<HTMLButtonElement | null>(null)
    const [profileAnchor, setProfileAnchor] =
        React.useState<HTMLButtonElement | null>(null)

    const openNotifications = Boolean(notificationAnchor)
    const openProfile = Boolean(profileAnchor)
    const navigate = useNavigate()

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
                        setnotificationAnchor(e.currentTarget)
                    }}
                >
                    <Badge badgeContent={4} color="success">
                        {' '}
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
                        <div>
                            <Typography variant="h6">
                                <b>Title</b>
                            </Typography>
                            <p>
                                This notification notifies the user about whtat
                                the notifications system sent.
                            </p>
                            <Divider />
                        </div>
                        <div>
                            <Typography variant="h6">
                                <b>Title</b>
                            </Typography>
                            <p>
                                This notification notifies the user about whtat
                                the notifications system sent.
                            </p>
                            <Divider />
                        </div>
                        <div>
                            <Typography variant="h6">
                                <b>Title</b>
                            </Typography>
                            <p>
                                This notification notifies the user about whtat
                                the notifications system sent.
                            </p>
                            <Divider />
                        </div>
                    </div>
                </Popover>
                <IconButton
                    onClick={(e) => {
                        setProfileAnchor(e.currentTarget)
                    }}
                >
                    <Avatar />
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
                        <Avatar sx={{ margin: '10px' }}>A</Avatar>
                        <p>alex@gmail.com</p>
                        <Divider />
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
