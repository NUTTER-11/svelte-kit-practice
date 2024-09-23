<script>
    export let data;
    const products = data.products;
    const Component = data.Component;
</script>

<h1>List of products {data.title}</h1>
{#each products as product}
    <div>
        <!-- <h2>{product.title}</h2>
    <h2>{product.description}</h2> -->
        <Component {product} />
    </div>
{/each}
