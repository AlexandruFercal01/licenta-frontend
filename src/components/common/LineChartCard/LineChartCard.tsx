import { Box, Card } from '@mui/material'
import { SparkLineChart } from '@mui/x-charts'
import React from 'react'

type Props = {
    title?: string
}

const style = {
    maxWidth: '500px',
    height: '500px',
    padding: '20px',
    margin: '10px',
    broderRadius: '20px ',
}

export function LineChartCard({ title }: Props) {
    return (
        <Card sx={style}>
            <h3>{title}</h3>
            <Box sx={{ flexGrow: 1 }}>
                <SparkLineChart
                    data={[24, 23, 22.1, 0, 22.5, 24.5, 27]}
                    height={150}
                    showHighlight
                    showTooltip
                />
            </Box>
        </Card>
    )
}
