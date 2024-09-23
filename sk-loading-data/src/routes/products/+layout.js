export const load = async (loadEvent) => {
    const { fetch } = loadEvent
    const title = 'Featured products'
    const response = await fetch("http://localhost:4000/products")
    const featuredProducts = await response.json()
    return {
        title, featuredProducts
    }
}