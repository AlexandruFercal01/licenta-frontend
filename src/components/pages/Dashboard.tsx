import React, { useEffect, useMemo, useState } from 'react'
import './dashboard.styles.css'

import { SensorCard } from '../common/SensorCard'
import { ControlCard } from '../common/ControlCard/indes'
import { getLatestValues, toggleFan1,toggleFan2, togglePump, toggleWindowOpen } from '../../api/Sensors'
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
                        unit_value="%"
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
                    <ControlCard name="Panou lateral" on={memoizedSensorsData.openWindow} onToggle={()=> toggleWindowOpen(!sensorsData.openWindow)} />
                    <ControlCard name="Ventilatorul 1" on={memoizedSensorsData.fan1} onToggle={()=> toggleFan1(!sensorsData.fan1)}/>
                    <ControlCard name="Ventilatorul 2" on={memoizedSensorsData.fan2} onToggle={()=> toggleFan2(!sensorsData.fan2)}/>
                    <ControlCard name="Pompa de apa" on={memoizedSensorsData.water_pump} onToggle={()=> togglePump(!sensorsData.water_pump)}/>
                </div>
            </div> : <DashboardSkeleton/>}
        </div>
    )
}
