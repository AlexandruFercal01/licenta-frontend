import React from 'react'
import './styles.css'

import { Card } from '@mui/material'
import { CircularProgressbar } from 'react-circular-progressbar'

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
                    <div className="unitValueContainer">
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
