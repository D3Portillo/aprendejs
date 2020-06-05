//Context on this options are on client side (window, etc)
const zoom = require("medium-zoom").default
module.exports = {
  product: {
    styles: {
      product: {
        "@media (min-width: 601px)": {
          "max-width": "calc(33.33333% - 30px)",
          "margin-left": "30px",
          "margin-bottom": "50px",
          width: "calc(33.33333% - 30px)",
        },
        padding: "0 0 2rem 0",
        "border-radius": "4px",
        "box-shadow": "0px 0px 5px 0px rgba(0,0,0,0.07)",
      },
      title: {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "normal",
        color: "#000000",
      },
      button: {
        "font-family": "Open Sans, sans-serif",
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        color: "#000000",
        ":hover": {
          color: "#000000",
          "background-color": "#e6dd09",
        },
        "background-color": "#fff50a",
        ":focus": {
          "background-color": "#e6dd09",
        },
        "border-radius": "4px",
        "padding-left": "43px",
        "padding-right": "43px",
      },
      quantityInput: {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
      },
      price: {
        "font-family": "Arial, sans-serif",
        "font-size": "16px",
        color: "#656565",
      },
      compareAt: {
        "font-family": "Arial, sans-serif",
        "font-size": "13.6px",
        color: "#656565",
      },
      unitPrice: {
        "font-family": "Arial, sans-serif",
        "font-size": "13.6px",
        color: "#656565",
      },
      img: {
        "@media (max-width: 600px)": {
          "max-width": "20rem !important",
        },
        cursor: "pointer",
      },
    },
    buttonDestination: "modal",
    contents: {
      options: false,
    },
    text: {
      button: "Ver producto",
    },
    googleFonts: ["Open Sans"],
    DOMEvents: {
      "click img": (_, target) => {
        target.style.zIndex = 20
        zoom(target).open()
      },
    },
  },
  productSet: {
    styles: {
      products: {
        "@media (min-width: 601px)": {
          "margin-left": "-30px",
        },
      },
      collection: {
        padding: ".75rem 0 2.5rem 0",
      },
    },
    templates: {
      pagination: "",
    },
    DOMEvents: {
      "contentLoaded *": (_, target) => {
        console.log(_, target)
      },
    },
  },
  modalProduct: {
    contents: {
      img: true,
      imgWithCarousel: false,
    },
    order: ["title", "img", "description", "price", "button"],
    styles: {
      product: {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px",
        },
        padding: "2.5rem",
      },
      button: {
        "font-family": "Open Sans, sans-serif",
        "font-size": "20px",
        "padding-top": "17px",
        "padding-bottom": "17px",
        "font-weight": "bold",
        color: "#000",
        ":hover": {
          color: "#000000",
          "background-color": "#e6dd09",
        },
        "background-color": "#fff",
        border: "solid 2px #e6dd09",
        ":focus": {
          "background-color": "#e6dd09",
        },
        "border-radius": "0px",
        "padding-left": "43px",
        "padding-right": "43px",

        margin: "0 auto 4rem auto !important",
        display: "block",
      },
      quantityInput: {
        "font-size": "18px",
        "padding-top": "17px",
        "padding-bottom": "17px",
      },
      title: {
        "font-family": "Open Sans, sans-serif",
        "font-weight": "normal",
        "font-size": "34px",
        color: "#000000",
        "text-align": "center",
        "padding-top": "2rem",
        "padding-bottom": "2rem",
      },
      price: {
        "font-family": "Arial, sans-serif",
        "font-size": "20px",
        "border-bottom": "solid 1px",
        "border-top": "solid 1px",
        margin: "2rem 0",
        padding: "1rem 0",
        color: "#000000",
        display: "block",
        "text-align": "center",
      },
      compareAt: {
        "font-family": "Arial, sans-serif",
        "font-size": "20.4px",
      },
      unitPrice: {
        "font-family": "Arial, sans-serif",
        "font-size": "20.4px",
      },
      description: {
        "font-family": "Open Sans, sans-serif",
        "font-size": "15px",
        "text-align": "center",
      },
      img: {
        "border-radius": "8px",
      },
    },
    googleFonts: ["Open Sans"],
    text: {
      button: "AGREGAR +",
    },
  },
  cart: {
    styles: {
      button: {
        "font-family": "Open Sans, sans-serif",
        "font-size": "18px",
        "padding-top": "17px",
        "font-weight": "bold",
        "padding-bottom": "17px",
        color: "#ffffff",
        "background-color": "#000000",
        "border-radius": "4px",
      },
    },
    text: {
      title: "Carrito de compras",
      total: "Total",
      button: "Pagar ahora",
      notice: "",
    },

    popup: false,
    googleFonts: ["Open Sans"],
  },
  toggle: {
    styles: {
      toggle: {
        "font-family": "Open Sans, sans-serif",
        "background-color": "#ffffff",
        "box-shadow": "inset 0 0 1px rgba(0,0,0,0.5)",
        ":hover": {
          "background-color": "#F8F8F8",
        },
        ":focus": {
          "background-color": "#F8F8F8",
        },
      },
      count: {
        "font-size": "18px",
        color: "#000000",
        ":hover": {
          color: "#000000",
        },
      },
      iconPath: {
        fill: "#000000",
      },
    },
    googleFonts: ["Open Sans"],
  },
}
