<script>
    import {invalidate} from '$app/navigation'
    export let data;
    function refresh(){
        invalidate('http://localhost:4000/stocks')
    }
</script>
{#each data.stocks as stock}
    <h2>{stock.symbol} - ${stock.price}</h2>
{/each}
<button on:click={refresh}>Refresh</button>