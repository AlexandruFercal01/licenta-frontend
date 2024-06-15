import React, { useEffect, useMemo, useState } from 'react'
import './dashboard.styles.css'

import { SensorCard } from '../common/SensorCard'
import { ControlCard } from '../common/ControlCard/indes'
import {
    getLatestValues,
    toggleFan1,
    togglePump,
    toggleWindowOpen,
} from '../../api/Sensors'
import { DashboardSkeleton } from '../common/Skeleton'
import { IconType, SensorsData } from '../../shared'
import { toggleAlert } from '../common/AlertSnackbar'

export function Dashboard() {
    const [sensorsData, setSensorsData] = useState<SensorsData>()
    const memoizedSensorsData = useMemo(() => sensorsData, [sensorsData])

    const getSensorsData = () => {
        getLatestValues()
            .then((res) => {
                const response: SensorsData = {
                    temperature: Number.parseFloat(res.data?.temperature),
                    humidity: Number.parseFloat(res.data?.hummidity),
                    soil_humidity: Number.parseFloat(res.data?.soil_humidity),
                    light: Number.parseFloat(res.data?.light),
                    ...res.data,
                }
                console.log(response)
                setSensorsData(response)
                console.log(sensorsData)
            })
            .catch((err) => {
                toggleAlert(err.message)
            })
    }

    useEffect(() => {
        getSensorsData()
        const interval = setInterval(() => {
            getSensorsData()
            console.log(sensorsData)
        }, 15000)

        return () => clearInterval(interval)
    }, [])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSensorsData({
            ...sensorsData,
            [event.target.name]: event.target.checked,
        })
        switch (event.target.name) {
            case 'Ventilator':
                toggleFan1(!event.target.checked)
                break
            case 'Panou lateral':
                toggleWindowOpen(event.target.checked)
                break
            case 'Pompa de apa':
                togglePump(!event.target.checked)
                break
        }
    }

    return (
        <div className="container">
            {memoizedSensorsData ? (
                <div className="sensorsTable">
                    <h2>Senzori</h2>
                    <div className="cardContainer">
                        <SensorCard
                            name="Temperatura"
                            value={memoizedSensorsData.temperature}
                            unit_value="°C"
                            icon={IconType['temperature']}
                        />
                        <SensorCard
                            name="Intensitate luminoasa"
                            value={memoizedSensorsData.light}
                            unit_value="lux"
                            icon={IconType['light']}
                        />
                        <SensorCard
                            name="Umiditate sol"
                            value={memoizedSensorsData.soil_humidity}
                            unit_value="%"
                            icon={IconType['soil_humidity']}
                        />
                        <SensorCard
                            name="Umiditate aer"
                            value={memoizedSensorsData.humidity}
                            unit_value="%"
                            icon={IconType['air_humidity']}
                        />
                    </div>

                    <h2>Control</h2>
                    <div className="cardContainer">
                        <ControlCard
                            name="Panou lateral"
                            on={memoizedSensorsData.openWindow}
                            onToggle={handleChange}
                        />
                        <ControlCard
                            name="Ventilator"
                            on={memoizedSensorsData.fan2}
                            onToggle={handleChange}
                        />
                        <ControlCard
                            name="Pompa de apa"
                            on={memoizedSensorsData.water_pump}
                            onToggle={handleChange}
                        />
                    </div>
                </div>
            ) : (
                <DashboardSkeleton />
            )}
        </div>
    )
}
