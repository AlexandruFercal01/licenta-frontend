import { Button, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import './login.styles.css'
import axios from 'axios'

import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import Alert from '@mui/material'
import { toggleAlert } from '../common/AlertSnackbar'
import { Severity } from '../common/AlertSnackbar'

export function Login() {
    const navigate = useNavigate()
    const email = useRef<HTMLInputElement>()
    const password = useRef<HTMLInputElement>()

    useEffect(() => {
        localStorage.clear()
    }, [])

    const handleSubmit = async () => {
        await axios
            .post('http://localhost:3001/login', {
                email: email.current.value,
                password: password.current.value,
            })
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                navigate('/dashboard')
                if (res.status === 200) {
                    console.log(res.status)
                    toggleAlert({
                        open: true,
                        message: 'Login successful',
                        severity: Severity.success,
                    })
                }
            })
            .catch((err) => {
                console.log(err)
                toggleAlert({
                    open: true,
                    message: err.response.data.error || 'Login failed',
                    severity: Severity.error,
                })
            })
    }

    return (
        <div className="mainContainer">
            <div className="loginContainer">
                <img src={logo} height="50px" />
                <h2 style={{ marginTop: '0px' }}>Plantario</h2>

                <TextField label={'Email'} color="success" inputRef={email} />
                <TextField
                    label={'Password'}
                    color="success"
                    type="password"
                    inputRef={password}
                />
                <Button
                    variant="contained"
                    color="success"
                    sx={{ backgroundColor: '#79ac78' }}
                    onClick={handleSubmit}
                >
                    Sign in
                </Button>
            </div>
        </div>
    )
}
