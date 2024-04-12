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

export const toggleWindowOpen = (windowState: boolean)=>{
    return axios.post("http://localhost:3001/greenhouse/servo", {
        "openWindow": windowState
    }, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }); 
}

export const toggleFan1 = (fanState: boolean)=>{
    return axios.post("http://localhost:3001/greenhouse/fan/1", {
        "fan1": fanState
    }, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }); 
}

export const toggleFan2 = (fanState: boolean)=>{
    return axios.post("http://localhost:3001/greenhouse/fan/2", {
        "fan2": fanState
    }, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }); 
}

export const togglePump = (pumpState: boolean)=>{
    return axios.post("http://localhost:3001/greenhouse/fan/2", {
        "water_pump": pumpState
    }, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }); 
}




