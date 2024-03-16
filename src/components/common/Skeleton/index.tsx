import { Skeleton } from '@mui/material';
import React from 'react';

export function DashboardSkeleton(){
    return <div className="sensorsTable">
    <h2>Sensors data</h2>
    <div className="cardContainer">
        <Skeleton variant='rectangular' width={380} height={270} sx={{margin: '10px', borderRadius:'16px'}}></Skeleton>
        <Skeleton variant='rectangular' width={380} height={270} sx={{margin: '10px', borderRadius:'16px'}}></Skeleton>
        <Skeleton variant='rectangular' width={380} height={270} sx={{margin: '10px', borderRadius:'16px'}}></Skeleton>
        <Skeleton variant='rectangular' width={380} height={270} sx={{margin: '10px', borderRadius:'16px'}}></Skeleton>
    </div>

    <h2>Control </h2>
    <div className="controlCardContainer">
        <Skeleton variant='rectangular' width={220} height={130} sx={{margin: '20px', borderRadius:'16px'}}></Skeleton>
        <Skeleton variant='rectangular' width={220} height={130} sx={{margin: '20px', borderRadius:'16px'}}></Skeleton>
        <Skeleton variant='rectangular' width={220} height={130} sx={{margin: '20px', borderRadius:'16px'}}></Skeleton>
        <Skeleton variant='rectangular' width={220} height={130} sx={{margin: '20px', borderRadius:'16px'}}></Skeleton>
    </div>
</div>
}


export function MyPlantsSkeleton(){
    return <div></div>
}