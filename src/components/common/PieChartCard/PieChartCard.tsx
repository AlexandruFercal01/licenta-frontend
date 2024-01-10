import { Card } from '@mui/material'
import { PieChart } from '@mui/x-charts'
import React from 'react'

type Props = {
    title?: string
}

const style = {
    maxWidth: '300px',
    height: '350px',
    borderRadius: '20px ',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}

const chartStyle = {
    innerRadius: 30,
    outerRadius: 100,
    paddingAngle: 1,
    cornerRadius: 5,
    startAngle: -90,
    endAngle: 360,
    cx: 150,
    // cy: 125,
}

export function PieChartCard({ title }: Props) {
    return (
        <Card sx={style}>
            <h3>{title}</h3>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 10 },
                            { id: 1, value: 15 },
                            { id: 2, value: 20 },
                            { id: 3, value: 100 },
                        ],
                        ...chartStyle,
                    },
                ]}
            />
        </Card>
    )
}
