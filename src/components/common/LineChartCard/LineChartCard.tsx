import {
    Box,
    Button,
    Card,
    CircularProgress,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    useMediaQuery,
} from '@mui/material'
import { LineChart, SparkLineChart } from '@mui/x-charts'
import React, { useEffect, useState } from 'react'
import {
    getAllValues,
    getMonthValues,
    getTodayValues,
    getWeekValues,
    
} from '../../../api/Sensors'
import { SensorsData } from '../../../shared'
import { Severity, toggleAlert } from '../AlertSnackbar'
import { AnalyticsSkeleton } from '../Skeleton'

type Props = {
    title?: string
}

const style = {
    height: '100%',
    borderRadius: '20px ',
    paddingTop: '0px',
    overflow: 'auto',
}

function getFirstAndLastDayOfWeek(date) {
    const clonedDate = new Date(date)

    const firstDayOfWeek = new Date(
        clonedDate.setDate(clonedDate.getDate() - clonedDate.getDay() + 1)
    )

    const lastDayOfWeek = new Date(clonedDate.setDate(clonedDate.getDate() + 6))

    return {
        firstDayOfWeek,
        lastDayOfWeek,
    }
}

function convertNumberToMonthString(month: number) {
    switch (month) {
        case 1:
            return 'Ianuarie'
            break
        case 2:
            return 'Februarie'
            break
        case 3:
            return 'Martie'
            break
        case 4:
            return 'Aprilie'
            break
        case 5:
            return 'Mai'
            break
        case 6:
            return 'Iunie'
            break
        case 7:
            return 'Iulie'
            break
        case 8:
            return 'August'
            break
        case 9:
            return 'Septembrie'
            break
        case 10:
            return 'Octombrie'
            break
        case 11:
            return 'Noiembrie'
            break
        case 12:
            return 'Decembrie'
            break
    }
}

export function LineChartCard() {
    const isMobile = useMediaQuery('(max-width: 768px)')
    const [data, setData] = useState<any>()
    const [sensorType, setSensorType] = useState<string>('temperature')
    const [time, setTime] = useState<string>('all')
    const [timeStamps, setTimestamps] = useState<string[] | undefined>([])

    const populateWithData = (sensorType: string, time: string) => {
        switch (time) {
            case 'all':
                getAllValues()
                    .then((res) => {
                        const data = []
                        const timestamps = []
                        const response = res.data as SensorsData[]
                        response.forEach((sensor) => {
                            timestamps.push(
                                new Date(sensor.timestamp).toLocaleString()
                            )
                            Object.entries(sensor).forEach(([key, value]) => {
                                if (key === sensorType) {
                                    data.push(value)
                                }
                            })
                        })
                        setTimestamps(timestamps)
                        setData(data)
                    })
                    .catch((err) => {})
                break
            case 'today':
                getTodayValues()
                    .then((res) => {
                        const data = []
                        const timestamps = []
                        const response = res.data as SensorsData[]
                        response.forEach((sensor) => {
                            timestamps.push(
                                new Date(sensor.timestamp).toLocaleString()
                            )
                            Object.entries(sensor).forEach(([key, value]) => {
                                if (key === sensorType) {
                                    data.push(value)
                                }
                            })
                        })
                        setTimestamps(timestamps)
                        setData(data)
                    })
                    .catch((err) => {})
                break
            case 'week':
                getWeekValues()
                    .then((res) => {
                        const data = []
                        const timestamps = []
                        const response = res.data as SensorsData[]
                        response.forEach((sensor) => {
                            const firstDayOfWeek = getFirstAndLastDayOfWeek(
                                sensor.timestamp
                            ).firstDayOfWeek.toLocaleDateString()
                            const lastDayOfWeek = getFirstAndLastDayOfWeek(
                                sensor.timestamp
                            ).lastDayOfWeek.toLocaleDateString()
                            timestamps.push(
                                `${firstDayOfWeek} - ${lastDayOfWeek}`
                            )
                            Object.entries(sensor).forEach(([key, value]) => {
                                if (key === sensorType) {
                                    data.push(value)
                                }
                            })
                        })

                        setTimestamps(timestamps)
                        setData(data)
                    })
                    .catch((err) => {})
                break
            case 'month':
                getMonthValues()
                    .then((res) => {
                        const data = []
                        const timestamps = []
                        const response = res.data as SensorsData[]
                        response.forEach((sensor) => {
                            timestamps.push(
                                convertNumberToMonthString(
                                    new Date(sensor.timestamp).getMonth()
                                )
                            )
                            console.log(timestamps)
                            Object.entries(sensor).forEach(([key, value]) => {
                                if (key === sensorType) {
                                    data.push(value)
                                }
                            })
                        })
                        setTimestamps(timestamps)
                        setData(data)
                    })
                    .catch((err) => {})
                break
        }
    }

    useEffect(() => {
        populateWithData(sensorType, time)
    }, [sensorType, time])

    return data ? (
        <Card sx={style}>
            <Box sx={{ flexGrow: 1, overflow: 'auto', margin: '10px' }}>
                <SparkLineChart
                    xAxis={{ data: timeStamps || [] }}
                    data={data || []}
                    height={500}
                    width={isMobile ? 1000 : undefined}
                    showHighlight
                    showTooltip
                />
            </Box>
            <Box sx={{ display: 'flex', gap: '20px' }}>
                <FormControl sx={{ margin: '10px', width: '50%' }}>
                    <InputLabel>Senzor</InputLabel>
                    <Select
                        variant="standard"
                        defaultValue={'temperature'}
                        onChange={(e) => setSensorType(e.target.value)}
                    >
                        <MenuItem value={'temperature'}>Temperatura</MenuItem>
                        <MenuItem value={'soil_humidity'}>
                            Umiditate sol
                        </MenuItem>
                        <MenuItem value={'humidity'}>Umiditate Aer</MenuItem>
                        <MenuItem value={'light'}>Lumina</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ margin: '10px', width: '50%' }}>
                    <InputLabel>Moment de timp</InputLabel>
                    <Select
                        variant="standard"
                        defaultValue={'all'}
                        onChange={(e) => setTime(e.target.value)}
                    >   
                        <MenuItem value={'all'}>Toate valorile</MenuItem>
                        <MenuItem value={'today'}>Azi</MenuItem>
                        <MenuItem value={'week'}>Saptamanal</MenuItem>
                        <MenuItem value={'month'}>Lunar</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Card>
    ) : (
        <AnalyticsSkeleton/>
    )
}
