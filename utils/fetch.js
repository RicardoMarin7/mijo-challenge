
export const getProducts = async () =>{
    const url = 'https://my.api.mockaroo.com/products'

    try {
        const response = await fetch(url, {
            method: "GET",
            withCredentials: true,
            headers:{
                "X-API-Key": "253a0410"
            }
        })

        return await response.json()
    } catch (error) {
        console.log(error)
        return []
    }
}