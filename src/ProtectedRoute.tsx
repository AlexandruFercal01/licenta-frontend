import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export function ProtectedRoute(): JSX.Element {
    return localStorage.getItem('isLogged') === 'true' ? (
        <Outlet />
    ) : (
        <Navigate to={'/login'} />
    )
}
