const TITLE = `AprendeJS`
const DESCRIPTION = `Aprendé Javascript desde tu email con un contenido previamente preparado y curado, además al completar recibirás un certificado válido por lo aprendido.`
const IMAGE = "https://aprendejs.email/seo.jpg"
export const getMetas = ({
  title = TITLE,
  description = DESCRIPTION,
  image = IMAGE,
  url = "https://aprendejs.email",
}) => {
  return [
    {
      name: "author",
      content: "AprendeJS",
    },
    {
      name: "keywords",
      content: "javascript,aprendejs,coding,newsletter",
    },
    {
      name: "description",
      content: description,
    },
    {
      name: "og:title",
      content: title,
    },
    {
      name: "og:description",
      content: description,
    },
    {
      name: "og:image",
      content: image,
    },
    {
      name: "og:url",
      content: url,
    },

    {
      name: "twitter:card",
      content: description,
    },
    {
      name: "og:site_name",
      content: title,
    },
    {
      name: "twitter:image:alt",
      content: url,
    },
  ]
}
