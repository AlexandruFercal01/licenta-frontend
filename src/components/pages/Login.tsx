import { Button, TextField } from '@mui/material'
import React from 'react'
import './login.styles.css'
import axios from 'axios'

import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { toggleAlert } from '../common/AlertSnackbar'
import { Severity } from '../common/AlertSnackbar'
import { useForm } from 'react-hook-form'
import { LoginForm } from '../../shared'
import { authenticate } from '../../api/Users'

export function Login() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState,
    } = useForm<LoginForm>( {mode: 'onChange'})
    const { errors, isValid } = formState;


    const onSubmit = async (data: LoginForm) => {
            authenticate(data)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('email', res.data.email)
                navigate('/dashboard')
                if (res.status === 200) {
                    console.log(res.status)
                    toggleAlert({
                        open: true,
                        message: 'Autentificare reusita',
                        severity: Severity.success,
                    })
                }
            })
            .catch((err) => {
                console.log(err)
                toggleAlert({
                    open: true,
                    message: err.response.data.error || 'Autentificare nereusita',
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
                                message: 'Email-ul este necesar'
                            },
                            pattern: {
                                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                                message: 'Email-ul nu este valid',
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
                                message: 'Parola este necesara'
                            },
                        })}
                        label={'Parola'}
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
