const foodApi = "http://localhost:3000/api/food";


export const getFoodItemsApi = async () => {
    try {
        const response = await fetch(`${foodApi}/food`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching food items:", error);
        throw error;
    }
}

export const getFoodItemByIdApi = async (id) => {
    try {
        const response = await fetch(`${foodApi}/getfood/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching food item by ID:", error);
        throw error;
    }
}