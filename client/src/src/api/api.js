const Api = "http://localhost:3000/api/"

export const getAppFood = async () => {
    const response = await fetch(`${Api}food/food`);
    const data = await response.json();
    return data;
}

