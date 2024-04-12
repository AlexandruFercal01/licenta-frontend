import React, { useCallback, useEffect, useState } from 'react'
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
import { SnackbarProvider } from 'notistack'
import { Notifications } from 'react-push-notification'
import { io } from 'socket.io-client'
import { useNotificationContext } from './components/context/notificationContext'

const SOCKET_SERVER_URL = 'http://localhost:3001'

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const { notifications, addNotification } = useNotificationContext()

    useEffect(() => {
        // Establish a WebSocket connection to the server
        const socket = io(SOCKET_SERVER_URL)

        // Listen for the 'sensorAlert' event from the server
        socket.on('sensorAlert', (data) => {
            addNotification({
                title: data.title,
                message: data.message,
            })
        })

        // Clean up the effect by disconnecting the socket when the component unmounts
        return () => {
            socket.disconnect()
        }
    }, [])

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
        <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
            <Notifications />
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
        </SnackbarProvider>
    )
}

export default App
