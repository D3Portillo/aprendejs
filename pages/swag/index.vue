<template>
  <div class="w-full flex flex-col items-center overflow-hidden">
    <img
      class="w-full"
      style="min-width: 27rem"
      src="/images/swag.jpg"
      alt="SWAG/MERCH"
    />
    <div class="bg-white min-h-screen">
      <div
        class="text-center py-10 mb-16 px-8 text-sm border-b border-t border-darker"
      >
        AprendeJS, siempre, <b>siempre</b> será gratuito, puedes apoyar a
        mantenerlo así comprando stickers y swag. Además colaboras en promoverlo
        y así alcanzar mcuhas más personas 🙌.
      </div>
      <div class="w-full">
        <div
          v-if="!doneLoading"
          class="text-center py-12 z-1 top-0 opacity-25 absolute w-full"
        >
          Cargando...
        </div>
        <div
          id="collection-component-1590880826855"
          :style="doneLoading || 'filter: blur(30px) hue-rotate(33deg)'"
        />
      </div>
    </div>
  </div>
</template>
<script>
const options = require("../../shopify")
import { getMetas } from "../../functions/find-cert"
const title = `AprendeJS | Merch 💃`
export default {
  data() {
    return {
      doneLoading: false,
    }
  },
  head: {
    meta: getMetas({
      title,
      description: `Compra tu swag para apoyar a https://aprendejs.email 💓`,
      image: "/seo-swag.jpg",
      url: "https://aprendejs.email/swag",
    }),
    title,
  },
  mounted() {
    window.loadingDone = () => {
      this.doneLoading = true
    }
    function ShopifyBuyInit() {
      const client = ShopifyBuy.buildClient({
        domain: "d3portillo.myshopify.com",
        storefrontAccessToken: "2b6d9c060210650808161aa6624b85ed",
      })
      ShopifyBuy.UI.onReady(client).then((ui) => {
        ui.createComponent("collection", {
          id: "198980468885",
          node: document.getElementById("collection-component-1590880826855"),
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options,
        })
      })
    }
    function loadScript() {
      const scriptURL = `https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js`
      const script = document.createElement("script")
      script.async = true
      script.src = scriptURL
      document.head.appendChild(script)
      script.onload = ShopifyBuyInit
    }

    if (window.ShopifyBuy?.UI) {
      ShopifyBuyInit()
    } else {
      loadScript()
    }
  },
}
</script>
