<template>
  <div class="bg-white">
    <div class="p-8">
      <div class="font-title text-4xl text-center">
        Discord
      </div>
      <p class="text-center">
        Únete al <a href="https://discord.gg/7PyRZ6n">server de discord</a> de
        <b>#AprendeJS</b>, consulta dudas sobre Javascript, conoce personas
        interesadas en este lenguaje y sus tecnologías.
      </p>
    </div>
    <div class="px-4 pb-4">
      <iframe
        src="https://discord.com/widget?id=716223433264070696&theme=dark"
        width="100%"
        height="500"
        allowtransparency="true"
        frameborder="0"
        class="shadow-xl"
      />
    </div>
  </div>
</template>

<script>
import zoom from "medium-zoom"
import { getMetas } from "../../functions/find-cert"
const description = `Únete server de #AprendeJS y conoce personas interesadas sobre javascript y sus tecnologías.`
export default {
  head: {
    meta: getMetas({
      title: "AprendeJS | Discord",
      image: "/seo-discord.jpg",
      description,
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
