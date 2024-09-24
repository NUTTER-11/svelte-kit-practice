export const load = async (loadEvent) => {
    const { fetch } = loadEvent
    const mostactivestockresponse = await fetch('http://localhost:4000/most-active-stock')
    const topgainingstockresponse = await fetch('http://localhost:4000/top-gaining-stock')
    const toploosingstockresponse = await fetch('http://localhost:4000/top-loosing-stock')
    // const mostactivestock = await mostactivestockresponse.json();
    // const topgainingstock = await topgainingstockresponse.json();
    // const toploosingstock = await toploosingstockresponse.json();
    console.log(mostactivestockresponse)

    return {
        mostactivestock:await mostactivestockresponse.json(),
        topgainingstock:await topgainingstockresponse.json(),
        toploosingstock:await toploosingstockresponse.json(),
    }
}