import React from 'react'
import './styles.css'

import { Card } from '@mui/material'

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
                <h2>{name}</h2>
                <h1>
                    {value}
                    {unit_value}
                </h1>
            </div>
            {icon}
        </Card>
    )
}
