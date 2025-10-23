
const BASE_URL = 'http://localhost:3000/api';


export const loginApi = async (userData) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });
    const data = await response.json();
    return data;
}

export const registerApi = async (userData) => {
    const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },


        body: JSON.stringify(userData),
    });

    const data = await response.json();
    console.log(data);
    return data;
}

export const fetchUserProfileApi = async (token) => {
    const response = await fetch(`${BASE_URL}/auth/profile`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });
    const data = await response.json();
    return data;
}

