import { useMediaQuery } from '@mui/material'
import { enqueueSnackbar } from 'notistack'
import React from 'react'

export enum Severity {
    success = 'green',
    error = 'red',
}

type Props = {
    open?: boolean
    message: string
    severity: Severity
    autoHideDuration?: number, 
}

export function toggleAlert({ ...props }: Props) {

    enqueueSnackbar(props.message, {
        autoHideDuration: props.autoHideDuration || 5000,
        anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        },
        style: {
            backgroundColor:
                props.severity === Severity.error ? 'red' : '#2cbc63',

        },
    })
}
