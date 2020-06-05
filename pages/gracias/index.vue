<template>
  <div class="bg-white min-h-screen">
    <img
      class="mx-auto w-full max-w-md py-8"
      src="/images/banner.svg"
      alt="ApredeJS"
    />
    <img class="w-full" src="/images/yaay.gif" alt="TY" />
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
import { getMetas } from "../../helpers"
export default {
  head: {
    meta: getMetas({
      title: "AprendeJS | Gracias :)",
      image: "/images/yaay.gif",
    }),
  },
  data() {
    return {
      profiles: [],
    }
  },
  methods: {
    addZoom: ({ target = null }) => zoom(target),
  },
  mounted() {
    const _this = this
    fetch(`https://aprendejs.email/.netlify/functions/certs`)
      .then((r) => r.json())
      .then((data) => {
        _this.profiles = data
      })
  },
}
</script>
