const Api = "locahost:3000/api/"

export const foodApi = async () => {
    const response = await fetch(`${Api}food/get-foods`);
    const data = await response.json();
    return data;
}
