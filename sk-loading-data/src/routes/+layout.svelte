<script>
    import { page } from "$app/stores";
    export let data;
    const { username } = data;
</script>

<svelte:head>
    <title>{$page.data.title || "codeevelution"}</title>
</svelte:head>
{#if $page.data.notification}
    <p>{$page.data.notification}</p>
{/if}

<h1>Welcome ,{username}</h1>
<slot />
