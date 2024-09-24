export const load = async (loadEvent) => {
    const { fetch, parent } = loadEvent
    const parentdata = await parent()
    const { username } = parentdata
    const title = 'Featured products'
    const response = await fetch("http://localhost:4000/products")
    const featuredProducts = await response.json()
    return {
        username, title, featuredProducts
    }
}