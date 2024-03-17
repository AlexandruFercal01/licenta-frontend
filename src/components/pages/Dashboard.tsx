import React, { useEffect, useMemo, useState } from 'react'
import './dashboard.styles.css'

import { SensorCard } from '../common/SensorCard'
import { ControlCard } from '../common/ControlCard/indes'
import { getLatestValues } from '../../api/Sensors'
import { DashboardSkeleton } from '../common/Skeleton'
import { Icon, IconType, SensorsData } from '../../shared'
import { toggleAlert } from '../common/AlertSnackbar'



export function Dashboard() {
    const [sensorsData, setSensorsData] = useState<SensorsData | undefined>();
    const memoizedSensorsData = useMemo(()=> sensorsData, [sensorsData]);

    const getSensorsData = ()=>{
        getLatestValues().then((res)=>{
            const response : SensorsData = {...res.data} as SensorsData;
            setSensorsData(response);
        }).catch((err)=>{
            toggleAlert(err.message);
        })
    }

    useEffect(()=>{
        getSensorsData();
        const interval = setInterval(()=>{
            getSensorsData();
        }, 30000);

        return ()=> clearInterval(interval);
    }, []);

    return (
        <div className="container">
            { memoizedSensorsData ?
            <div className="sensorsTable">
                <h2>Sensors data</h2>
                <div className="cardContainer">
                    <SensorCard
                        name="Temperature"
                        value={memoizedSensorsData.temperature}
                        unit_value="°C"
                        icon={IconType['temperature']}
                    />
                    <SensorCard
                        name="Light"
                        value={memoizedSensorsData.light}
                        unit_value="%"
                        icon={IconType['light']}
                    />
                    <SensorCard
                        name="Soil humidity"
                        value={memoizedSensorsData.soil_humidity}
                        unit_value="%"
                        icon={IconType['soil_humidity']}
                    />
                    <SensorCard
                        name="Air Humidity"
                        value={memoizedSensorsData.humidity}
                        unit_value="%"
                        icon={IconType['air_humidity']}
                    />
                </div>

                <h2>Control </h2>
                <div className="controlCardContainer">
                    <ControlCard name="Open Window" on={memoizedSensorsData.openWindow} />
                    <ControlCard name="Turn fan 1 On" on={memoizedSensorsData.fan1} />
                    <ControlCard name="Turn fan 2 On" on={memoizedSensorsData.fan2} />
                    <ControlCard name="Water the plants" on={memoizedSensorsData.water_pump} />
                </div>
            </div> : <DashboardSkeleton/>}
        </div>
    )
}
