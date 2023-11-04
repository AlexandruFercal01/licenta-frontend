import { Card, Switch } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './styles.css'

type Props = {
    name: string
    on: boolean
}

export function ControlCard({ name, on }: Props) {
    const [checkedColor, setCheckedColor] = useState<string>('')

    useEffect(() => {
        if (on) {
            setCheckedColor('#555843')
        } else {
            setCheckedColor('#FFFFFF')
        }
    }, [on])

    return (
        <Card
            sx={{
                width: 'fit-content',
                padding: '10px',
            }}
            className="controlCard"
        >
            <h2>{name}</h2>{' '}
            <Switch
                color="default"
                defaultChecked={on}
                sx={{
                    '&.MuiSwitch-root .Mui-checked': {
                        color: '#555843',
                    },
                }}
            />
        </Card>
    )
}
