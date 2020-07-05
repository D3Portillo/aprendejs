<template>
  <div class="bg-white min-h-screen">
    <img
      class="mx-auto w-full max-w-md py-8"
      src="/images/banner.svg"
      alt="ApredeJS"
    />
    <img class="w-full" src="/images/yaay.gif" alt="Yaaay!" />
    <div class="mx-auto max-w-2xl text-sm px-8 pb-2 pt-1">
      <p>
        <b>Yaay estás dentro : )</b> , pero... para para iniciar a recibir
        emails de Javascript, necesito verificar tu email; para verificarlo
        sigue las instrucciones enviadas a tu bandeja de entrada (PD: también
        checa el Spam).
      </p>
    </div>
  </div>
</template>

<script>
import zoom from "medium-zoom"
import { getMetas } from "../../functions/find-cert"
const description = `Gracias por registrarte al curso 💕`
export default {
  head: {
    meta: getMetas({
      title: "AprendeJS | Gracias :)",
      image: "/images/yaay.gif",
      description
    }),
  },
}
</script>
