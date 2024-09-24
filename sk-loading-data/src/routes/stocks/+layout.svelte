<script>
    export let data
</script>

<span>Most active stock -- {data.mostactivestock.symbol} --{data.mostactivestock.price}</span>
<span>Top gaining stock -- {data.topgainingstock.symbol} --{data.mostactivestock.price}</span>
<span>Top Loosing stock -- {data.toploosingstock.symbol} --{data.mostactivestock.price}</span>
<slot/>
<style>
    span{
        margin-right: 30px;
        font-size: 24px;
    }
</style>