import React from 'react'
import './styles.css'

import { Box, Card, CircularProgress, Typography } from '@mui/material'

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

                <Box display="flex" justifyContent="center" alignItems="center">
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
                </Box>
            </div>
            {icon}
        </Card>
    )
}
