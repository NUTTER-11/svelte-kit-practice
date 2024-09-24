<script>
    export let product;
</script>

<div>
    <a href={`/product/{productId}`}>
    <h2>{product.title}</h2>
    </a>
    <h2>{product.description}</h2>
</div>
