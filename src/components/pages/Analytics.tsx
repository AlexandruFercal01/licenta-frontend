import React from 'react'
import { LineChartCard } from '../common/LineChartCard/LineChartCard'
import { PieChartCard } from '../common/PieChartCard/PieChartCard'

import './analytics.styles.css'
import { BarChartCard } from '../common/BarChartCard/BarChartCard'
import { Card, Grid } from '@mui/material'

export function Analytics() {
    return (
        <div className="container">
            {/* <div className="firstRow">
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                    }}
                >
                    <div className="sensors">
                        <Card className="card">
                            <h1>Temperature</h1>
                            <h1>25*C</h1>
                        </Card>
                        <Card className="card">
                            <h1>Soil Humidity</h1>
                            <h1>Humid</h1>
                        </Card>
                        <Card className="card">
                            <h1>Air Humidity</h1>
                            <h1>57%</h1>
                        </Card>
                        <Card className="card">
                            <h1>Light</h1>
                            <h1>70%</h1>
                        </Card>
                    </div>
                    <LineChartCard title="Temperature over the week" />
                </div>
                <BarChartCard title="Alex are mere " />
                <PieChartCard title="Alex are mere " />
            </div> */}
            <Grid container spacing={1} margin={'5px'}>
                <Grid xs={5}>
                    <LineChartCard title="Sensors values by type" />
                </Grid>
                <Grid xs={7}>
                    <Grid container width={'95%'}>
                        <Grid xs={6}>
                            <Card className="card">
                                <h1>Temperature</h1>
                                <h1>25*C</h1>
                            </Card>
                        </Grid>

                        <Grid xs={6}>
                            <Card className="card">
                                <h1>Temperature</h1>
                                <h1>25*C</h1>
                            </Card>
                        </Grid>
                        <Grid xs={6}>
                            <Card className="card">
                                <h1>Temperature</h1>
                                <h1>25*C</h1>
                            </Card>
                        </Grid>
                        <Grid xs={6}>
                            <Card className="card">
                                <h1>Soil Humidity</h1>
                                <h1>58%</h1>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={5}>
                    <PieChartCard title="Sensors values by type" />
                </Grid>
                <Grid xs={7}>
                    <BarChartCard title="Sensors values by type" />
                </Grid>
            </Grid>
        </div>
    )
}
