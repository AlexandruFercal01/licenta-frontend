import { Card } from '@mui/material'
import { BarChart } from '@mui/x-charts'
import React from 'react'

type Props = {
    title?: string
}

const style = {
    height: '350px',
    borderRadius: '20px ',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

const chartStyle = { shapeRendering: { borderRadius: '20px' } }

export function BarChartCard({ title }: Props) {
    return (
        <Card sx={style}>
            <h3>{title}</h3>
            <BarChart
                xAxis={[
                    {
                        scaleType: 'band',
                        data: ['group A', 'group B', 'group C', 'group D'],
                    },
                ]}
                series={[
                    { data: [4, 3, 5, 6] },
                    { data: [1, 6, 3, 7] },
                    { data: [2, 5, 6, 8] },
                    { data: [1, 2, 3, 4] },
                ]}
                sx={chartStyle}
                height={300}
            />
        </Card>
    )
}
