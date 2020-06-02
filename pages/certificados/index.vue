<template>
  <table class="bg-white w-full">
    <tbody>
      <tr v-for="profile in profiles" :key="profile.id">
        <td>
          <div>
            {{ profile.name }}
          </div>
          <img class="h-12" :src="profile.picture" :alt="profile.name" />
        </td>
        <td>
          {{ profile.email }}
          <a :href="'/certificados/' + profile.id">Ver certificado</a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
const PAYLOAD = [
  {
    id: "ID",
    name: "Ejemplo",
    email: "email@ejemplo.com",
    cert:
      "https://dl.airtable.com/.attachments/480cef1f221d4d03687c027b16e9b95a/cb4cec57/codeventdiploma.pdf",
    picture: "/images/no-profile.png",
  },
]
export default {
  data() {
    return {
      profiles: [],
    }
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
