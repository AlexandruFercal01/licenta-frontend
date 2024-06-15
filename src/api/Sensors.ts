import api from "./ApiService";

export const getLatestValues = ()=>{
    return api.get("http://localhost:3001/greenhouse/latestValue", {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    });
};

export const getAllValues = ()=>{
    return api.get("http://localhost:3001/greenhouse/allData", {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    });
};

export const getTodayValues = ()=>{
    return api.get("http://localhost:3001/greenhouse/todayData", {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    });
};

export const getWeekValues = ()=>{
    return api.get("http://localhost:3001/greenhouse/weeklyData", {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    });
};

export const getMonthValues = ()=>{
    return api.get("http://localhost:3001/greenhouse/monthlyData", {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    });
};

export const toggleWindowOpen = (windowState: boolean)=>{
    return api.post("http://localhost:3001/greenhouse/servo", {
        "openWindow": windowState
    }, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }); 
}

export const toggleFan1 = (fanState: boolean)=>{
    return api.post("http://localhost:3001/greenhouse/fan/1", {
        "fan1": fanState
    }, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }); 
}

export const toggleFan2 = (fanState: boolean)=>{
    return api.post("http://localhost:3001/greenhouse/fan/2", {
        "fan2": fanState
    }, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }); 
}

export const togglePump = (pumpState: boolean)=>{
    return api.post("http://localhost:3001/greenhouse/fan/2", {
        "water_pump": pumpState
    }, {
        headers: {
            'Authorization': localStorage.getItem('token')
        }
    }); 
}




