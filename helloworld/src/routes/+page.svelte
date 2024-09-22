<script>
  import { goto ,beforeNavigate,afterNavigate} from "$app/navigation";
  const handleclick = () => {
    console.log("placing an order");
    goto('/products');
  };
  beforeNavigate((navigation)=>{
    console.log({before:navigation})
  })
  afterNavigate((navigation)=>{
    console.log({after:navigation})
  })
</script>

<h1>home</h1>

<button on:click={handleclick}>place order</button>
