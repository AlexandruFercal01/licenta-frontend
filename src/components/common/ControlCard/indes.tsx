import { Card, Switch } from '@mui/material'
import React from 'react'
import './styles.css'

type Props = {
    name: string
    on: boolean,
    onToggle: (event: React.ChangeEvent<HTMLInputElement> ) => void,
}

export function ControlCard({ name, on, onToggle }: Props) {
    return (
        <Card
            sx={{
                padding: '10px',
                minWidth: '200px',
            }}
            className="controlCard"
        >
            <h2>{name}</h2>{' '}
            <Switch
                name={name}
                color="default"
                defaultChecked={on}
                sx={{
                    '&.MuiSwitch-root .Mui-checked': {
                        color: '#79ac78',
                    },
                }}
                onChange={onToggle}
            />
        </Card>
    )
}
