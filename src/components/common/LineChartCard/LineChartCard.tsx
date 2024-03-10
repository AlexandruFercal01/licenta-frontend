import {
    Box,
    Button,
    Card,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from '@mui/material'
import { LineChart, SparkLineChart } from '@mui/x-charts'
import React from 'react'

type Props = {
    title?: string
}

const style = {
    height: '70vh',
    borderRadius: '20px ',
    paddingTop: '0px',
}

export function LineChartCard() {
    return (
        <Card sx={style}>
            <Box sx={{ flexGrow: 1 }}>
                <SparkLineChart
                    sx={{
                        padding: '10px',
                        margin: '10px',
                    }}
                    data={[
                        24, 23, 22.1, 22.5, 24.5, 27, 24, 23, 42.1, 22.5, 24.5,
                        27, 24, 23, 22.1, 22.5, 24.5, 27, 24, 23, 22.1, 22.5,
                        24.5, 27, 24, 23, 30.1, 22.5, 24.5, 27, 24, 23, 22.1,
                        22.5, 24.5, 27, 15,
                    ]}
                    height={500}
                    showHighlight
                    showTooltip
                    area
                />
            </Box>
            <Box sx={{ display: 'flex', gap: '20px' }}>
                <FormControl sx={{ margin: '10px', width: '50%' }}>
                    <InputLabel>Senzor</InputLabel>
                    <Select variant="standard" label="Age">
                        <MenuItem value={10}>Temperatura</MenuItem>
                        <MenuItem value={20}>Umiditate sol</MenuItem>
                        <MenuItem value={30}>Umiditate Aer</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ margin: '10px', width: '50%' }}>
                    <InputLabel>Moment de timp</InputLabel>
                    <Select variant="standard" label="Age">
                        <MenuItem value={10}>Azi</MenuItem>
                        <MenuItem value={20}>Saptamanal</MenuItem>
                        <MenuItem value={30}>Lunar</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Card>
    )
}
