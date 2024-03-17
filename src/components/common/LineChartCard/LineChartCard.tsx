import {
    Box,
    Button,
    Card,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    useMediaQuery,
} from '@mui/material'
import { LineChart, SparkLineChart } from '@mui/x-charts'
import React, { useEffect, useState } from 'react'
import { getMonthValues, getTodayValues, getWeekValues } from '../../../api/Sensors'
import { SensorsData } from '../../../shared'
import { Severity, toggleAlert } from '../AlertSnackbar'

type Props = {
    title?: string
}

const style = {
    height: '70vh',
    borderRadius: '20px ',
    paddingTop: '0px',
}

function getFirstAndLastDayOfWeek(date) {
    // Clone the date object to avoid modifying the original one
    const clonedDate = new Date(date);
    
    // Calculate the first day of the week (Sunday) by subtracting the current day of the week
    // and add 1 since getDay() returns values from 0 (Sunday) to 6 (Saturday)
    const firstDayOfWeek = new Date(clonedDate.setDate(clonedDate.getDate() - clonedDate.getDay() + 1));
    
    // Calculate the last day of the week (Saturday) by adding the remaining days until Saturday
    // (6 - current day of the week)
    const lastDayOfWeek = new Date(clonedDate.setDate(clonedDate.getDate() + 6));

    return {
        firstDayOfWeek,
        lastDayOfWeek
    };
}

function convertNumberToMonthString(month:number){
    switch(month){
        case 1: return 'Ianuarie'; break;
        case 2: return 'Februarie'; break;
        case 3: return 'Martie'; break;
        case 4: return 'Aprilie'; break;
        case 5: return 'Mai'; break;
        case 6: return 'Iunie'; break;
        case 7: return 'Iulie'; break;
        case 8: return 'August'; break;
        case 9: return 'Septembrie'; break;
        case 10: return 'Octombrie'; break;
        case 11: return 'Noiembrie'; break;
        case 12: return 'Decembrie'; break;
    }
}

export function LineChartCard() {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [data, setData] = useState<any>();
    const [sensorType, setSensorType] = useState<any>('temperature');
    const [time, setTime] = useState<any>('today');
    const [timeStamps, setTimestamps] = useState<string[] | undefined>([]);

    const populateWithData = (sensorType: string, time: string)=>{
        switch(time){
            case 'today': getTodayValues().then((res)=>{
                const data = [];
                const timestamps = [];
                const response = res.data as SensorsData[];
                response.forEach((sensor) => {
                    timestamps.push(new Date(sensor.timestamp).toLocaleString());
                    console.log(timestamps);
                    Object.entries(sensor).forEach(([key, value])=>{
                        if(key===sensorType){
                            data.push(value);
                        }
                        
                    })
                })
                toggleAlert({message: 'Valorile de azi au fost incarcate cu succes', severity: Severity.success, autoHideDuration: 3000 })
                setTimestamps(timestamps);
                setData(data);
            }).catch((err)=>{
                toggleAlert({message: 'S-a produs o eroare', severity: Severity.error, autoHideDuration: 3000 })
            });
            break;
            case 'week': getWeekValues().then((res)=>{
                const data = [];
                const timestamps = [];
                const response = res.data as SensorsData[];
                response.forEach((sensor) => {
                    const firstDayOfWeek = getFirstAndLastDayOfWeek(sensor.timestamp).firstDayOfWeek.toLocaleDateString();
                    const lastDayOfWeek = getFirstAndLastDayOfWeek(sensor.timestamp).lastDayOfWeek.toLocaleDateString();
                    timestamps.push(`${firstDayOfWeek} - ${lastDayOfWeek}`) 
                    console.log(timestamps);
                    Object.entries(sensor).forEach(([key, value])=>{
                        if(key===sensorType){
                            data.push(value);
                        }
                        
                    })
                })
                toggleAlert({message: 'Valorile saptamanale au fost incarcate cu succes', severity: Severity.success, autoHideDuration: 3000 })
                setTimestamps(timestamps);
                setData(data);
                console.log(data);
            }).catch((err)=>{
                toggleAlert({message: 'S-a produs o eroare', severity: Severity.error, autoHideDuration: 3000 })
            });
            break;
            case 'month': getMonthValues().then((res)=>{
                const data = [];
                const timestamps = [];
                const response = res.data as SensorsData[];
                response.forEach((sensor) => {
                    timestamps.push(convertNumberToMonthString(new Date(sensor.timestamp).getMonth()));
                    console.log(timestamps);
                    Object.entries(sensor).forEach(([key, value])=>{
                        if(key===sensorType){
                            data.push(value);
                        }
                        
                    })
                })
                toggleAlert({message: 'Valorile de azi au fost incarcate cu succes', severity: Severity.success, autoHideDuration: 3000 })
                setTimestamps(timestamps);
                setData(data);
            }).catch((err)=>{
                toggleAlert({message: 'S-a produs o eroare', severity: Severity.error, autoHideDuration: 3000 })
            });
            break;

        }
        
    }

    useEffect(()=>{
        populateWithData(sensorType, time);
    }, [sensorType, time]);
   
    return (
        <Card sx={style}>
            <Box sx={{ flexGrow: 1, overflow: 'auto', margin: '10px', }}>
                <SparkLineChart
                    xAxis={{ data: timeStamps || []}}
                    data={data || []}
                    height={500}
                    width={isMobile ? 1000 : undefined}
                    showHighlight
                    showTooltip
                    area
                />
            </Box>
            <Box sx={{ display: 'flex', gap: '20px' }}>
                <FormControl sx={{ margin: '10px', width: '50%' }}>
                    <InputLabel>Senzor</InputLabel>
                    <Select variant="standard" defaultValue={'temperature'}  onChange={(e)=> setSensorType(e.target.value)}>
                        <MenuItem value={'temperature'} >Temperatura</MenuItem>
                        <MenuItem value={'humidity'} >Umiditate sol</MenuItem>
                        <MenuItem value={'soil_humidity'}>Umiditate Aer</MenuItem>
                        <MenuItem value={'light'}>Lumina</MenuItem>
                    </Select>
                </FormControl>
                <FormControl sx={{ margin: '10px', width: '50%' }}>
                    <InputLabel>Moment de timp</InputLabel>
                    <Select variant="standard" defaultValue={'today'} onChange={(e)=> setTime(e.target.value) }>
                        <MenuItem value={'today'}>Azi</MenuItem>
                        <MenuItem value={'week'}>Saptamanal</MenuItem>
                        <MenuItem value={'month'}>Lunar</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </Card>
    )
}
