<template>
  <div>
    <div v-for="profile in profiles" :key="profile.email"></div>
  </div>
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
    fetch(`https://aprendejs.email/.netlify/functions/certs`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data)
      })
  },
}
</script>
