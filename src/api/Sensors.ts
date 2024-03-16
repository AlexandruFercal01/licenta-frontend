import axios from "axios";

export const getLatestValues = ()=>{
    return axios.get("http://localhost:3001/greenhouse/latestValue", {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    });
};

export const getTodayValues = ()=>{
    return axios.get("http://localhost:3001/greenhouse/todayData", {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    });
};

export const getWeekValues = ()=>{
    return axios.get("http://localhost:3001/greenhouse/weeklyData", {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    });
};

export const getMonthValues = ()=>{
    return axios.get("http://localhost:3001/greenhouse/monthlyData", {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    });
};




