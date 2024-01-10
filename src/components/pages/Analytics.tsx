import React from 'react'
import { LineChartCard } from '../common/LineChartCard/LineChartCard'
import { PieChartCard } from '../common/PieChartCard/PieChartCard'

import './analytics.styles.css'
import { BarChartCard } from '../common/BarChartCard/BarChartCard'
import { Card, Grid } from '@mui/material'

export function Analytics() {
    return (
        <div className="container">
            <Grid
                container
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Grid xs={12} lg={5}>
                    <LineChartCard title="Sensors values by type" />
                </Grid>
                <Grid xs={12} lg={7}>
                    <Grid container width={'100%'}>
                        <Grid xs={12} lg={6}>
                            <Card className="card">
                                <h3>Temperature</h3>
                                <h3>25*C</h3>
                            </Card>
                        </Grid>
                        <Grid xs={12} lg={6}>
                            <Card className="card">
                                <h3>Temperature</h3>
                                <h3>25*C</h3>
                            </Card>
                        </Grid>
                        <Grid xs={12} lg={6}>
                            <Card className="card">
                                <h3>Temperature</h3>
                                <h3>25*C</h3>
                            </Card>
                        </Grid>
                        <Grid xs={12} lg={6}>
                            <Card className="card">
                                <h3>Soil Humidity</h3>
                                <h3>58%</h3>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid xs={12} lg={4}>
                    <PieChartCard title="Sensors values by type" />
                </Grid>
                <Grid xs={12} lg={8}>
                    <BarChartCard title="Sensors values by type" />
                </Grid>
            </Grid>
        </div>
    )
}
