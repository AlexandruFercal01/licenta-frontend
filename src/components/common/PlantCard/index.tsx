import {
    Card,
    Box,
    CardActions,
    CardContent,
    CardMedia,
    Chip,
    IconButton,
    Stack,
    Tooltip,
    Typography,
} from '@mui/material'
import React, { useEffect } from 'react'
import './styles.css'
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'
import { deletePlantFromFavourites } from '../../../api/Plants'


export interface PlantProps {
    id?: number
    common_name: string
    scientific_name: string[]
    description?: string
    watering?: string
    watering_period?: string
    watering_general_benchmark?: string
    sunlight?: string
    type?: string
    origin?: string
    dimension?: string
    growth_rate?: string
    maintenance?: string
    medium_url?: string
    pruning_month?: string[]
    onDelete?: (id: number) => void;
}

export function PlantCard({ ...props }: PlantProps) {


    return (
        <Card
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                margin: '10px 0px',
                borderRadius: '20px',
            }}
        >
            <CardMedia
                component="img"
                sx={{
                    width: { sm: 150 },
                    height: { xs: 250, sm: 'auto' },
                    objectFit: 'cover',
                }}
                image={props.medium_url}
                alt={props.common_name}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                    position: 'relative',
                }}
            >
                <CardContent sx={{ flex: '1 0 auto', height: '100%' }}>
                    <Typography variant="h5" component="div">
                        {props.common_name}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        {props.scientific_name}
                        <IconButton
                            aria-label="delete"
                            onClick={() => props.onDelete?.(props.id as number)}
                            sx={{
                                position: 'absolute',
                                right: 0,
                                top: 0,
                                margin: '10px',
                            }}
                        >
                            <DeleteForeverRoundedIcon />
                        </IconButton>
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ marginBottom: 2 }}
                    >
                        {props.description}
                    </Typography>
                    <Stack
                        direction="row"
                        spacing={1}
                        flexWrap="wrap"
                        gap={1}
                        justifyContent={{ xs: 'center', sm: 'flex-start' }}
                    >
                        {props.type && <Chip label={`Tip: ${props.type}`} />}
                        {props.origin && (
                            <Chip label={`Origine: ${props.origin}`} />
                        )}
                        {props.dimension && (
                            <Chip label={`Dimensiune: ${props.dimension}`} />
                        )}
                        {props.growth_rate && (
                            <Chip
                                label={`Rată de creștere: ${props.growth_rate}`}
                            />
                        )}
                        {props.maintenance && (
                            <Chip label={`Întreținere: ${props.maintenance}`} />
                        )}
                        {props.sunlight && (
                            <Chip label={`Soare: ${props.sunlight}`} />
                        )}
                        {props.watering && (
                            <Chip label={`Udare: ${props.watering}`} />
                        )}
                        {props.watering_period && (
                            <Chip label={`Perioada de udare: ${props.watering_period}`} />
                        )}
                        {props.watering_general_benchmark && (
                            <Chip label={`Udare generală: ${props.watering_general_benchmark}`} />
                        )}
                        {props.pruning_month && (
                            <Chip label={`Perioada de retezare: ${props.pruning_month}`} />
                        )}
                    </Stack>
                </CardContent>
            </Box>
        </Card>
    )
}
