import { Card } from '@mui/material'
import { BarChart } from '@mui/x-charts'
import React from 'react'

type Props = {
    title?: string
}

const style = {
    width: '90%',
    height: '360px',
    borderRadius: '20px ',
    margin: ' 10px',
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
                        data: ['group A', 'group B', 'group C'],
                    },
                ]}
                series={[
                    { data: [4, 3, 5] },
                    { data: [1, 6, 3] },
                    { data: [2, 5, 6] },
                ]}
                sx={chartStyle}
                width={500}
                height={300}
            />
        </Card>
    )
}
