import React, { Dispatch, SetStateAction } from 'react'
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
import { useNavigate } from 'react-router-dom'

type HeaderProps = {
    isMenuOpen: boolean
    setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

export function Header({ isMenuOpen, setIsMenuOpen }: HeaderProps) {
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
                    onClick={() => {
                        setIsMenuOpen(!isMenuOpen)
                    }}
                >
                    <MenuRoundedIcon fontSize="large" />
                </IconButton>
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
