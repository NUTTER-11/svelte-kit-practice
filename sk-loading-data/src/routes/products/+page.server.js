

export const load = async (serverLoadEvent) => {
    console.log("Load function from server called")
    const { fetch } = serverLoadEvent
    const response = await fetch("http://localhost:4000/products")
    const products = await response.json()
    return {
        products
    }
}