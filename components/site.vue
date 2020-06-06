<template>
  <div class="w-full">
    <div class="mx-auto max-w-3xl sm:px-4">
      <slot />
    </div>
    <nav>
      <div class="max-w-3xl mx-auto sm:px-4">
        <div class="bg-whiter w-full pb-4">
          <div class="flex max-w-2xl mx-auto w-full px-8 pt-24 pb-20 items-end">
            <a href="https://d3portillo.me" no-link>
              <img src="/images/d7.png" class="w-20" alt="D.7" />
            </a>
            <div class="flex-grow flex flex-col items-end text-sm">
              <a
                href="https://github.com/D3Portillo/aprendejs/wiki/FAQ"
                target="_blank"
                >FAQ</a
              >
              <router-link to="/discord">Discord</router-link>
              <router-link to="/">Inicio / Home</router-link>
              <router-link to="/swag">Stickers & Swag</router-link>
              <router-link to="/certificados">Certificados</router-link>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-start overflow-hidden">
          <img src="/images/triangles.png" style="min-width: 54rem" alt="\/" />
        </div>
      </div>
      <div
        class="flex items-center justify-center sm:px-8 mt-24 mb-10 font-bold text-xs"
        style="letter-spacing: 1rem"
      >
        HECHO CON
        <img src="/images/heart.png" alt="❤️" class="h-5" />
      </div>
    </nav>
  </div>
</template>

<script>
import "./styles.css"
export default {
  head: {
    link: [
      {
        type: "image/png",
        rel: "icon",
        href: "/favicon.png",
      },
    ],
  },
}
</script>
