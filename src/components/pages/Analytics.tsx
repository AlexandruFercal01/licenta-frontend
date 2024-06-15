import React, { useState } from 'react'
import { LineChartCard } from '../common/LineChartCard/LineChartCard'
import './analytics.styles.css'

export function Analytics() {
    return (
        <div className="container">
            <LineChartCard />
        </div>
    )
}
