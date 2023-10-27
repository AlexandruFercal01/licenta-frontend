import React from 'react'
import './styles.css'
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded'
import GrassRoundedIcon from '@mui/icons-material/GrassRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded'
import mail from '../../assets/mail.png'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import { IconButton } from '@mui/material'

export function SidePanel() {
    return (
        <div className="sidePanel">
            <div>
                <h3>Pages</h3>
                <div className="line"></div>
                <div className="sideBtnContainer">
                    <button className="sideBtn">
                        <SpeedRoundedIcon /> Greenhouse Dashboard
                    </button>
                    <button className="sideBtn">
                        <GrassRoundedIcon />
                        My Plants
                    </button>
                    <button className="sideBtn">
                        <SearchRoundedIcon />
                        Plant Inspector
                    </button>
                    <button className="sideBtn">
                        <BarChartRoundedIcon />
                        Analytics
                    </button>
                </div>
            </div>
            <div className="contact">
                <h3>Contact</h3>
                <div className="line"></div>
                <div className="contactIcons">
                    <IconButton>
                        <img src={github} height="40px"></img>
                    </IconButton>
                    <IconButton>
                        <img src={mail} height="40px"></img>
                    </IconButton>
                    <IconButton>
                        <img src={linkedin} height="40px"></img>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
