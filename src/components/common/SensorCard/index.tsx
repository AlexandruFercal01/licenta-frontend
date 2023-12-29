import React from 'react'
import './styles.css'

import { Box, Card, CircularProgress, Typography } from '@mui/material'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

type Props = {
    name: string
    value: number
    unit_value: string
    icon: JSX.Element
}

export function SensorCard({ name, value, unit_value, icon }: Props) {
    return (
        <Card className="sensorCard">
            <div className="leftSide">
                {/* <Box display="flex" justifyContent="center" alignItems="center">
                    <CircularProgress
                        variant="determinate"
                        value={value}
                        style={{
                            width: '120px',
                            height: '120px',
                            borderRadius: '100%',
                            boxShadow: 'inset 0 0 0px 11px gray',
                            backgroundColor: 'transparent',
                            color: '#555843 ',
                        }}
                    />
                    <Typography
                        position="absolute"
                        fontSize={'32px'}
                        fontWeight={'bold'}
                    >
                        {value}
                        {unit_value}
                    </Typography>
                </Box> */}
                <div
                    style={{
                        height: '200px',
                        width: '150px',
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <CircularProgressbar
                        value={value}
                        circleRatio={0.8}
                        styles={{
                            root: { transform: 'rotate(0.6turn)' },
                            path: {
                                stroke: '#79ac78',
                                strokeLinecap: 'round',
                                transition: 'stroke-dashoffset 0.8s ease 0s',
                            },
                            text: {
                                transform: 'none',
                                textAlign: 'center',
                            },
                            trail: {
                                stroke: '#d6d6d6',
                                strokeLinecap: 'round',
                            },
                        }}
                    />
                    <div
                        style={{
                            backgroundColor: '#79ac78',
                            height: '75px',
                            width: '75px',
                            position: 'absolute',
                            top: 60,
                            borderRadius: '100%',
                            // paddingTop: '5px',
                            // paddingBottom: '5px',
                            padding: '5px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxShadow:
                                'inset -33px -33px 65px #3d563c,inset 33px 33px 65px #b6ffb4',
                        }}
                    >
                        <h2>{value + unit_value}</h2>
                    </div>
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // marginLeft: '10px',
                    width: '100%',
                    backgroundColor: '#F0F0F0',
                    margin: '15px',
                    borderRadius: '15px',
                }}
            >
                <h2>{name}</h2>
                {icon}
            </div>
        </Card>
    )
}
