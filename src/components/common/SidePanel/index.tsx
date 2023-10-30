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

export function SidePanel() {
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
                    >
                        Main Page
                    </Button>
                    <Button
                        className="Button"
                        variant="outlined"
                        startIcon={<SpeedRoundedIcon sx={{ color: 'black' }} />}
                    >
                        Dashboard
                    </Button>
                    <Button
                        className="Button"
                        variant="outlined"
                        startIcon={<GrassRoundedIcon sx={{ color: 'black' }} />}
                    >
                        My plants
                    </Button>
                    <Button
                        className="Button"
                        variant="outlined"
                        startIcon={
                            <SearchRoundedIcon sx={{ color: 'black' }} />
                        }
                    >
                        Plant inspector
                    </Button>
                    <Button
                        className="Button"
                        variant="outlined"
                        startIcon={
                            <BarChartRoundedIcon sx={{ color: 'black' }} />
                        }
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
