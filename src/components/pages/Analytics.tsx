import React, { useState } from 'react'
import { LineChartCard } from '../common/LineChartCard/LineChartCard'
import { PieChartCard } from '../common/PieChartCard/PieChartCard'


import { BarChartCard } from '../common/BarChartCard/BarChartCard'
import { Box, Slide, Tab, Tabs, Typography } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import './analytics.styles.css'

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}


function CustomTabPanel(props: TabPanelProps) {
    return <>{props.value === props.index && <>{props.children}</>}</>
}

export function Analytics() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    return (
        <div className="container">
            <div>
            <Tabs centered value={value}>
                <Tab
                    label="Grafic"
                    onClick={() => setValue(0)}
                    sx={
                        value === 0
                            ? {
                                  backgroundColor: 'white',
                                  borderRadius: '16px 16px 0  0 ',
                                  transition: 'ease 300ms',
                              }
                            : {}
                    }
                ></Tab>
                <Tab
                    label="Diagrama cu bare"
                    onClick={() => setValue(1)}
                    sx={
                        value === 1
                            ? {
                                  backgroundColor: 'white',
                                  borderRadius: '16px 16px 0  0 ',
                                  transition: 'ease 300ms',
                              }
                            : {}
                    }
                ></Tab>
            </Tabs>
            <CustomTabPanel value={value} index={0}>
                <LineChartCard />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <BarChartCard />
            </CustomTabPanel>
        </div>
        </div>
    )
}
