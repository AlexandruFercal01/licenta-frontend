import { Button, TextField } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import './login.styles.css'
import axios from 'axios'

import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import Alert from '@mui/material'
import { toggleAlert } from '../common/AlertSnackbar'
import { Severity } from '../common/AlertSnackbar'
import { useForm } from 'react-hook-form'
import { Label } from '@mui/icons-material'

type LoginForm = {
    email: string
    password: string
}

export function Login() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState,
    } = useForm<LoginForm>( {mode: 'onChange'})
    const { errors, isValid } = formState;


    const onSubmit = async (data: LoginForm) => {
        await axios
            .post('http://localhost:3001/login', {
                email: data.email,
                password: data.password,
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mainContainer">
                <div className="loginContainer">
                    <img src={logo} height="50px" />
                    <h2 style={{ marginTop: '0px' }}>Plantario</h2>

                    <TextField
                        id="email"
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                                message: 'This is not a valid email',
                            },
                        })}
                        label={'Email'}
                        color="success"
                        required
                        type="email"
                        error={!!errors.email}
                        helperText={errors.email ? errors.email.message : ''}
                    />
                    
                    <TextField
                        id="password"
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                        })}
                        label={'Password'}
                        color="success"
                        type="password"
                        error={!!errors.password}
                        helperText={errors.password ? errors.password.message : ''}
                    />
                    
                    <Button
                        variant="contained"
                        color="success"
                        sx={{ backgroundColor: '#79ac78' }}
                        type="submit"
                        disabled={!isValid}
                    >
                        Sign in
                    </Button>
                </div>
            </div>
        </form>
    )
}
