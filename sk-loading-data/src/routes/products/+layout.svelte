<script>
    export let data;
    const title = data.title;
    const featuredProducts = data.featuredProducts;
</script>
<h1>{title}</h1>
<slot />


{#each featuredProducts as product}
    <div class="product-item">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
    </div>
{/each}

<style>
    .product-item {
        display: inline-block;
        width: 200px;
        margin: 10px;
        border: 1px solid;
        padding: 10px;
    }
</style>
