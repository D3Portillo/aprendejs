<template>
  <div class="w-full flex flex-col items-center overflow-hidden">
    <img
      class="w-full"
      style="min-width: 27rem"
      src="/images/swag.jpg"
      alt="Banner"
    />
    <div
      class="bg-white mt-4 pt-12 min-h-screen"
      id="collection-component-1590880826855"
    >
      <div
        class="text-center pt-8 pb-16 mb-16 px-8 text-sm border-b border-darker"
      >
        AprendeJS, siempre, <b>siempre</b> será gratuito, puedes apoyar a
        mantenerlo así comprando stickers y swag para además colaborar en
        promoverlo y alcanzar mcuhas más personas 🥳.
      </div>
    </div>
  </div>
</template>
<script>
const options = require("../../shopify")
export default {
  mounted() {
    function loadScript() {
      const script = document.createElement("script")
      script.async = true
      script.src = scriptURL
      ;(
        document.getElementsByTagName("head")[0] ||
        document.getElementsByTagName("body")[0]
      ).appendChild(script)
      script.onload = ShopifyBuyInit
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
    const scriptURL = `https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js`
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        ShopifyBuyInit()
      } else {
        loadScript()
      }
    } else {
      loadScript()
    }
  },
}
</script>
