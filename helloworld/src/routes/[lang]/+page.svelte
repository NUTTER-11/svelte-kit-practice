<script>
  import { page } from "$app/stores";
  const greetings = {
    en: "hello",
    fr: "bonjour",
    es: "hola",
  };

  const { lang } = $page.params;
  const greeting = greetings[lang];
</script>

<h1>{greeting}</h1>
