import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import React from 'react'
import './login.styles.css'

import logo from '../assets/logo.png'

export function Login() {
    return (
        <div className="mainContainer">
            <div className="loginContainer">
                <img src={logo} height="50px" />
                <h2 style={{ marginTop: '0px' }}>Plantario</h2>
                <TextField label={'Email'} color="success" />
                <TextField label={'Password'} color="success" type="password" />
                <div>
                    <FormControlLabel
                        control={
                            <Checkbox defaultChecked={false} color="success" />
                        }
                        label="Remember me"
                    />
                </div>
                <Button
                    variant="contained"
                    color="success"
                    sx={{ backgroundColor: '#79ac78' }}
                >
                    Sign in
                </Button>
            </div>
        </div>
    )
}
