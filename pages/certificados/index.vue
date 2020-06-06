<template>
  <div class="bg-white w-full">
    <div class="p-8 text-center">
      <div class="font-title text-4xl text-center">
        Certificados
      </div>
      <p>
        Listado der personas que han completado exitosamente el curso de
        <b>Javascript, nivel intermedio</b> de <b>#AprendeJS</b>, creado por
        <a href="https://d3portillo.me">Denny Portillo</a>
      </p>
    </div>
    <div
      class="w-full overflow-x-auto overflow-y-hidden"
      style="min-height: 70vh"
    >
      <table class="w-full">
        <tbody>
          <tr v-for="profile in profiles" :key="profile.id">
            <img
              :style="`filter: hue-rotate(${Math.random() * 360}deg)`"
              src="/images/item-bg.svg"
              class="absolute right-0 bottom-0"
              alt="-.-"
            />
            <td class="py-4 px-8 md:px-16 border-t border-darker z-1">
              <img
                @load="addZoom"
                style="cursor: pointer"
                class="h-24 w-24 object-cover rounded z-20 bg-yellow text-sm shadow-inner"
                :src="profile.picture"
                :alt="profile.name"
              />
              <div class="text-xs">{{ profile.email }}</div>
            </td>
            <td
              class="pb-6 px-8 md:px-16 text-right border-t border-darker z-1"
            >
              <div class="text-xl mb-4">{{ profile.name }}</div>
              <a
                no-link
                style="border-color: #5dd1f9"
                class="text-xs py-2 px-4 border-2 border-solid rounded whitespace-no-wrap hover:underline"
                :href="'/certificados/' + profile.id"
                >Ver reconocimiento</a
              >
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="!profiles.length" class="text-center py-24 opacity-25">
        Cargando...
      </div>
    </div>
    <div class="px-8 text-xs text-center py-12">
      <b>Actividad:</b> Todos los usuarios listados completarón el curso
      realizando una lectura de 20 capítulos con un promedio de 8 minutos por
      capítulo, y además de la realización de ejercicios cómo ejemplos reales en
      la vida de un desarrollador web.
    </div>
  </div>
</template>

<script>
import zoom from "medium-zoom"
import { getMetas } from "../../helpers"
export default {
  head: {
    meta: getMetas({ title: "AprendeJS | Certificados" }),
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
