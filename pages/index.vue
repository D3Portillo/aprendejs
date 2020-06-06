<template>
  <div class="w-full bg-white py-8">
    <div class="max-w-2xl mx-auto px-8">
      <div
        class="flex items-center justify-center mb-16 lg:mb-12 pb-12 flex-wrap lg:flex-no-wrap border-b border-darker lg:border-transparent"
      >
        <img class="h-56" src="/images/logo.png" alt="💡" />
        <div class="flex-grow text-center lg:text-right">
          <div class="font-title text-4xl">
            AprendeJS
          </div>
          <div class="text-sm">
            Aprendé <b>Javascript</b> desde tu email con un contenido
            previamente preparado y curado, además al completar recibirás un
            certificado válido por lo aprendido.
          </div>
        </div>
      </div>

      <p>
        Hola, mi nombre es Denny Portillo.<br />Cuando inicié en el mundo de
        Javascript, sentí que no sabía lo necesario para poder enseñar a otros a
        hacer código con este lenguaje. Pero es tiempo de compartir lo que sé.
      </p>
      <p>
        Este es un pequeño curso de 20 capítulos para aprender javascript, al
        terminar este curso ya habrás hecho tu primera aplicación web funcional
        con un URL personalizado.
      </p>
      <p>
        Cada email está pensado para dedicar una lectura de aproximadamente 7 ~
        10 minutos.
      </p>
      <p>
        Ciertos capítulos incluíran ejercicios, guías y “tests” para aumentar el
        niver de complejidad. Al completar recibirás un certificado en honor a
        todo lo aprendido en la finalización de este. Puedes agregar el
        certificado a Linkedin.
      </p>
      <p>
        Estos cursos siempre y siempre serán gratuitos y para todo público,
        <b>tú correo electrónico y nombre no se usará en otros servicios</b>. Al
        suscribirte, solamente contenido sobre el aprendizaje de Javascript ó
        eventos importantes para mejorar las habilidades del mismo se enviarán a
        tu correo.
      </p>
      <p>
        Mirar el contenido del curso
        <b
          ><a href="https://github.com/D3Portillo/aprendejs/wiki/Contenido"
            >acá</a
          ></b
        >.
      </p>
      <form
        @submit="handleRequest"
        class="border-2 block p-10 mt-16 z-1 email-octopus-form"
        action="/"
      >
        <div class="font-title text-2xl">
          ¡Aprendamos javascript juntos!
        </div>
        <input
          type="text"
          hidden
          name="hpe0973809-a25a-11ea-a3d0-06b4694bee2a"
          tabindex="-1"
          autocomplete="nope"
        />
        <label class="mb-2 mt-12 block" for="field_1">
          Tu nombre
        </label>
        <input
          required
          type="text"
          name="field_1"
          placeholder="Juan Doe"
          class="bg-whiter w-full p-2 font-bold"
        />
        <label class="mb-2 mt-6 block" for="field_0">
          Correo electrónico
        </label>
        <input
          required
          type="email"
          name="field_0"
          placeholder="usuario@email.com"
          class="bg-whiter w-full p-2 mb-16 font-bold"
        />

        <div class="bg-white px-2 bg-white absolute right-0 mr-2 lg:mr-8">
          <button type="submit" class="w-48 md:w-56 cursor-pointer cta">
            <div
              class="absolute font-bold lg:text-xl inset-0 flex items-center justify-center text-white z-1"
            >
              SUSCRIBIRME
            </div>
            <img src="/images/button.svg" alt=" " />
          </button>
        </div>
      </form>
      <div
        class="email-octopus-rewards text-xs opacity-0 sm:opacity-25 cursor-default mt-2 mb-24"
      >
        Powered by
        <a
          href="https://emailoctopus.com/?urli=NmBql&amp;utm_medium=user_referral&amp;utm_source=builder"
          target="_blank"
          >🐙 EmailOctopus</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import { getMetas } from "../helpers"
const title = `AprendeJS | Home`
export default {
  head: {
    meta: getMetas({ title }),
    title,
  },
  methods: {
    handleRequest(e) {
      e.preventDefault()
      fetch(
        "https://emailoctopus.com/lists/e0973809-a25a-11ea-a3d0-06b4694bee2a/members/embedded/1.3/add",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: [...e.currentTarget.querySelectorAll("input")]
            .map(({ value, name }) => {
              return encodeURIComponent(name) + "=" + encodeURIComponent(value)
            })
            .join("&"),
        }
      )
        .then(() => {
          window.location.href = "/gracias"
        })
        .catch(console.error)
    },
  },
}
</script>
