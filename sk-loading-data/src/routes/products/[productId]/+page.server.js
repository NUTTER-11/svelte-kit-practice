
import { error, redirect } from '@sveltejs/kit'

export const load = async (serverLoadEvent) => {
    const { fetch, params } = serverLoadEvent
    const notification ='End of season sale and 50% off'
    const { productId } = params
    if (productId > 6) {
        // throw error(404, 'Oh no i think the product is currenty unavailable')
        throw redirect(307,'/products')
    }
    const response = await fetch(`http://localhost:4000/products/${productId}`)
    const product = await response.json()
    return {
        product,
        notification
    }
}