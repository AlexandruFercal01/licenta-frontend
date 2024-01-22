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

//pages

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login />} />

                <Route element={<ProtectedRoute />}>
                    <Route
                        path="/"
                        element={
                            <div>
                                <Header
                                    isMenuOpen={isMenuOpen}
                                    setIsMenuOpen={setIsMenuOpen}
                                />
                                <div className="body">
                                    <SidePanel isMenuOpen={isMenuOpen} />
                                    <Main />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <div>
                                <Header
                                    isMenuOpen={isMenuOpen}
                                    setIsMenuOpen={setIsMenuOpen}
                                />
                                <div className="body">
                                    <SidePanel isMenuOpen={isMenuOpen} />
                                    <Dashboard />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="/plants"
                        element={
                            <div>
                                <Header
                                    isMenuOpen={isMenuOpen}
                                    setIsMenuOpen={setIsMenuOpen}
                                />
                                <div className="body">
                                    <SidePanel isMenuOpen={isMenuOpen} />
                                    <MyPlants />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="/inspector"
                        element={
                            <div>
                                <Header
                                    isMenuOpen={isMenuOpen}
                                    setIsMenuOpen={setIsMenuOpen}
                                />
                                <div className="body">
                                    <SidePanel isMenuOpen={isMenuOpen} />
                                    <PlantInspector />
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="/analytics"
                        element={
                            <div>
                                <Header
                                    isMenuOpen={isMenuOpen}
                                    setIsMenuOpen={setIsMenuOpen}
                                />
                                <div className="body">
                                    <SidePanel isMenuOpen={isMenuOpen} />
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
