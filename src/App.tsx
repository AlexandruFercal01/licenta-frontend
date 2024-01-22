import React from 'react'
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

//pages

function App() {
    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route element={<ProtectedRoute />}>
                    <Route
                        path="/"
                        element={
                            <div>
                                <Header />
                                <div className="body">
                                    <SidePanel />
                                    <Main />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <div>
                                <Header />
                                <div className="body">
                                    <SidePanel />

                                    <Dashboard />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="/plants"
                        element={
                            <div>
                                <Header />
                                <div className="body">
                                    <SidePanel />
                                    <MyPlants />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="/inspector"
                        element={
                            <div>
                                <Header />
                                <div className="body">
                                    <SidePanel />
                                    <PlantInspector />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="/analytics"
                        element={
                            <div>
                                <Header />
                                <div className="body">
                                    <SidePanel />
                                    <Analytics />
                                </div>
                            </div>
                        }
                    />
                </Route>
                <Route path="/*" element={<div>404</div>} />
            </Routes>
        </div>
    )
}

export default App
