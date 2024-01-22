import React from 'react'

//material ui
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded'
import GrassRoundedIcon from '@mui/icons-material/GrassRounded'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'

import { Button } from '@mui/material'

//logos

import './styles.css'
import { useNavigate } from 'react-router-dom'

type SidePanelProps = {
    isMenuOpen: boolean
}

export function SidePanel({ isMenuOpen }: SidePanelProps) {
    const navigate = useNavigate()

    return (
        <div
            className="sidePanel"
            style={{
                width: isMenuOpen ? '' : '0px',
            }}
        >
            <div className="buttonsContainer">
                <div className="sideBtnContainer">
                    <Button
                        color="success"
                        className="Button"
                        startIcon={<HomeRoundedIcon sx={{ color: 'white' }} />}
                        onClick={() => {
                            navigate('/')
                        }}
                        style={{
                            justifyContent: 'flex-start',
                            display: isMenuOpen ? '' : 'none',
                        }}
                        sx={{ fontFamily: 'Nunito', fontSize: '17px' }}
                    >
                        Pagina Principală
                    </Button>
                    <Button
                        color="success"
                        className="Button"
                        startIcon={<SpeedRoundedIcon sx={{ color: 'white' }} />}
                        onClick={() => {
                            navigate('/dashboard')
                        }}
                        style={{
                            justifyContent: 'flex-start',
                            display: isMenuOpen ? '' : 'none',
                        }}
                        sx={{ fontFamily: 'Nunito', fontSize: '17px' }}
                    >
                        Panou de control
                    </Button>
                    <Button
                        color="success"
                        className="Button"
                        startIcon={<GrassRoundedIcon sx={{ color: 'white' }} />}
                        onClick={() => {
                            navigate('/plants')
                        }}
                        style={{
                            justifyContent: 'flex-start',
                            display: isMenuOpen ? '' : 'none',
                        }}
                        sx={{ fontFamily: 'Nunito', fontSize: '17px' }}
                    >
                        Plantele Mele
                    </Button>
                    <Button
                        color="success"
                        className="Button"
                        startIcon={
                            <SearchRoundedIcon
                                sx={{ color: 'white' }}
                                fontSize="large"
                            />
                        }
                        onClick={() => {
                            navigate('/inspector')
                        }}
                        style={{
                            justifyContent: 'flex-start',
                            display: isMenuOpen ? '' : 'none',
                        }}
                        sx={{ fontFamily: 'Nunito', fontSize: '17px' }}
                    >
                        Oracol Plante
                    </Button>
                    <Button
                        color="success"
                        className="Button"
                        startIcon={
                            <BarChartRoundedIcon sx={{ color: 'white' }} />
                        }
                        onClick={() => {
                            navigate('/analytics')
                        }}
                        style={{
                            justifyContent: 'flex-start',
                            display: isMenuOpen ? '' : 'none',
                        }}
                        sx={{ fontFamily: 'Nunito', fontSize: '17px' }}
                    >
                        Statistici
                    </Button>
                </div>
            </div>
        </div>
    )
}
