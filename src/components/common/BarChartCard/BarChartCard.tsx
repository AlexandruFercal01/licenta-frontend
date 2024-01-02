import { Card } from '@mui/material'
import { BarChart } from '@mui/x-charts'
import React from 'react'

type Props = {
    title?: string
}

const style = { width: '100%', padding: '20px', margin: '10px' }

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
                sx={{ shapeRendering: { borderRadius: '10px' } }}
                width={400}
                height={300}
            />
        </Card>
    )
}
