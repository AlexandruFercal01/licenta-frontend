import React, { useState } from 'react'
import './styles.css'
import { Route, Routes } from 'react-router-dom'

import { Main } from './components/pages/MainPage'
import { Header } from './components/common/Header'
import { SidePanel } from './components/common/SidePanel'
import { Dashboard } from './components/pages/Dashboard'
import { MyPlants } from './components/pages/MyPlants'
import { PlantInspector } from './components/pages/PlantInspector'
import { Analytics } from './components/pages/Analytics'
import { Login } from './components/pages/Login'
import { ProtectedRoute } from './ProtectedRoute'
import { BottomPanel } from './components/common/BottomPanel'

//pages

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const renderContent = (component: React.ReactNode) => (
        <div>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div className="body">
                <SidePanel isMenuOpen={isMenuOpen} />
                {component}
            </div>
            <BottomPanel />
        </div>
    )

    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={renderContent(<Main />)} />
                    <Route
                        path="/dashboard"
                        element={renderContent(<Dashboard />)}
                    />
                    <Route
                        path="/plants"
                        element={renderContent(<MyPlants />)}
                    />
                    <Route
                        path="/inspector"
                        element={renderContent(<PlantInspector />)}
                    />
                    <Route
                        path="/analytics"
                        element={renderContent(<Analytics />)}
                    />
                </Route>
                <Route path="/*" element={<div>404</div>} />
            </Routes>
        </div>
    )
}

export default App
