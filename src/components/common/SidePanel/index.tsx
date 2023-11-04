import React from 'react'

//material ui
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded'
import GrassRoundedIcon from '@mui/icons-material/GrassRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded'
import { Button, Divider, IconButton } from '@mui/material'

//logos
import mail from '../../assets/mail.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

import './styles.css'
import { useNavigate } from 'react-router-dom'

export function SidePanel() {
    const navigate = useNavigate()

    return (
        <div className="sidePanel">
            <div className="buttonsContainer">
                <h2>Pages</h2>
                <Divider />
                <div className="sideBtnContainer">
                    <Button
                        className="Button"
                        variant="outlined"
                        startIcon={<SpeedRoundedIcon sx={{ color: 'black' }} />}
                        onClick={() => {
                            navigate('/main')
                        }}
                    >
                        Main Page
                    </Button>
                    <Button
                        className="Button"
                        variant="outlined"
                        startIcon={<SpeedRoundedIcon sx={{ color: 'black' }} />}
                        onClick={() => {
                            navigate('/dashboard')
                        }}
                    >
                        Dashboard
                    </Button>
                    <Button
                        className="Button"
                        variant="outlined"
                        startIcon={<GrassRoundedIcon sx={{ color: 'black' }} />}
                        onClick={() => {
                            navigate('/plants')
                        }}
                    >
                        My plants
                    </Button>
                    <Button
                        className="Button"
                        variant="outlined"
                        startIcon={
                            <SearchRoundedIcon sx={{ color: 'black' }} />
                        }
                        onClick={() => {
                            navigate('/inspector')
                        }}
                    >
                        Plant inspector
                    </Button>
                    <Button
                        className="Button"
                        variant="outlined"
                        startIcon={
                            <BarChartRoundedIcon sx={{ color: 'black' }} />
                        }
                        onClick={() => {
                            navigate('/analytics')
                        }}
                    >
                        Analytics
                    </Button>
                </div>
            </div>
            <div className="contactContainer">
                <h2>Contact</h2>
                <Divider />
                <div className="contactIcons">
                    <IconButton
                        sx={{ height: '60px', width: '60px', margin: '10px' }}
                    >
                        {' '}
                        <img src={github} height="50px" />
                    </IconButton>
                    <IconButton
                        sx={{ height: '60px', width: '60px', margin: '10px' }}
                    >
                        {' '}
                        <img src={mail} height="50px" />
                    </IconButton>
                    <IconButton
                        sx={{ height: '60px', width: '60px', margin: '10px' }}
                    >
                        {' '}
                        <img src={linkedin} height="50px" />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
