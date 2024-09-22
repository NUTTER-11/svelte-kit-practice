<script>
    import {page} from '$app/stores'
    console.log($page.params.slug)
    const slugarr= $page.params.slug.split('/')
</script>


{#if slugarr.length ===1 }
<h1>docs homepage</h1>
{:else if slugarr.length ===2}
<h1>feature page homepage and concept {slugarr[1]}</h1>
{/if}
