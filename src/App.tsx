import React from 'react'
import './styles.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Main } from './components/pages/MainPage'
import { Header } from './components/common/Header'
import { SidePanel } from './components/common/SidePanel'
import { Dashboard } from './components/pages/Dashboard'
import { MyPlants } from './components/pages/MyPlants'
import { PlantInspector } from './components/pages/PlantInspector'
import { Analytics } from './components/pages/Analytics'

//pages

function App() {
    return (
        <div>
            <Header />
            <div className="body">
                <SidePanel />
                <BrowserRouter basename="">
                    <Routes>
                        <Route path="/main" element={<Main />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/plants" element={<MyPlants />} />
                        <Route path="/inspector" element={<PlantInspector />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="*" element={<div>404</div>} />
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App
