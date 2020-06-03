<template>
  <table class="bg-white w-full">
    <tbody>
      <tr v-for="profile in profiles" :key="profile.id">
        <td class="py-4 px-16 border-t border-darker">
          <div class="inline-block">
            <img
              class="h-32 w-32 object-cover rounded"
              :src="profile.picture"
              :alt="profile.name"
            />
            <div class="text-xs text-center">{{ profile.email }}</div>
          </div>
        </td>
        <td class="py-4 px-16 text-right border-t border-darker">
          <div class="text-2xl">{{ profile.name }}</div>
          <a class="text-xs" :href="'/certificados/' + profile.id"
            >Ver reconocimiento</a
          >
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
