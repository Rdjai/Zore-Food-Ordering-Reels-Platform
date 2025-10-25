

const BASE_URL = 'http://localhost:3000';
export const addAddress = async (addressData) => {
    try {
        const response = await fetch(`${BASE_URL}/api/user/address/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify(addressData),
        });
        console.log('Response from addAddress:', response);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding address:', error);
        throw error;
    }
}

export const getAddress = async (userId) => {
    try {
        const response = await fetch(`${BASE_URL}/api/user/address/${userId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
            },
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching address:', error);
        throw error;
    }
}
export const updateAddress = async (userId, updateData) => {
    try {
        const response = await fetch(`${BASE_URL}/api/user/address/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${localStorage.getItem("userToken")}`,
            },
            body: JSON.stringify(updateData),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error updating address:', error);
        throw error;
    }
}