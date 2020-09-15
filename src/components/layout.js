import React, { useState, useContext, createContext, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import CssBaseline from "@material-ui/core/CssBaseline"
import "./layout.css"
import { makeStyles } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
import "@stripe/stripe-js" // https://github.com/stripe/stripe-js#import-as-a-side-effect
import { CartProvider } from "use-shopping-cart"
import { loadStripe } from "@stripe/stripe-js"
import SimpleReactLightbox from "simple-react-lightbox"
import { DrawerCartContextProvider } from "../context/DrawerCartContext"
import { DrawerMenuContextProvider } from "../context/DrawerMenuContext"
// import { CurrencyContextProvider } from "../context/CurrencyContext"
// import { CurrencyContext } from "../context/CurrencyContext"
//  import { useShoppingCart } from "use-shopping-cart"
// import { LanguageContextProvider } from "../context/LanguageContext"
// import { LanguageContext } from "../context/LanguageContext"
const window = require("global/window")

const useStyles = makeStyles(theme => ({}))

// const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
const stripePromise = loadStripe(
  "pk_test_51HGUuRHwITO0GSJr0YK6FwbE17LUTst9UCvm2uH0RdjBtAnQJqgPmDn0BSunRc8FIEXRW3HatsFd1uDHkfaGJtUm00IA2780Iw"
)
export const CurrencyContext = createContext()
export const LanguageContext = createContext()

function Layout({ children }) {
  const classes = useStyles()
  // { actCurrency, handleCurrencyChange } = useContext(CurrencyContext)
  //  const { clearCart } = useShoppingCart()

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  /////////////////////////////////////////   detect of language and set it as initial value //////////////////////////////////////////////////////////////////////////
  function langDetect() {
    // console.log("Trololo:", window.navigator.language.slice(0, 2))
    // alert("Test")

    if (window.navigator.language.slice(0, 2) === "ru") {
      setActLanguage("RUS")
    } else if (window.navigator.language.slice(0, 2) === "de") {
      setActLanguage("DEU")
    } else if (window.navigator.language.slice(0, 2) === "ge") {
      setActLanguage("ENG")
    } else {
      setActLanguage("ENG")
    }
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////   detect of coutry and set initial currency //////////////////////////////////////////////////////////////////////////

  window.onload = function () {
    langDetect()
    var endpoint = "http://ip-api.com/json/?fields=status,message,countryCode"

    var xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var response = JSON.parse(this.responseText)
        if (response.status !== "success") {
          console.log("query failed: " + response.message)
          return
        }
        // Redirect
        if (response.countryCode == "US") {
          setActCurrency("USD")
        }
        if (response.countryCode == "DE") {
          setActCurrency("EUR")
        }
        if (response.countryCode == "RU") {
          setActCurrency("RUB")
        }
      }
    }
    xhr.open("GET", endpoint, true)
    xhr.send()
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [actCurrency, setActCurrency] = useState("")
  const [actLanguage, setActLanguage] = useState("")

  async function handleCurrencyChange(event) {
    setActCurrency(event.target.value)
    // clearCart();
    //  forceUpdate()
  }
  function handleLanguageChange(event) {
    setActLanguage(event.target.value)
  }

  return (
    <>
      <CurrencyContext.Provider
        value={{
          actCurrency,
          handleCurrencyChange,
        }}
      >
        <CartProvider
          mode="client-only"
          stripe={stripePromise}
          currency={actCurrency}
          // successUrl="https://kerbs-store-1.vercel.app/success/"
          // cancelUrl="https://kerbs-store-1.vercel.app/"
          successUrl="http://localhost:8000/success/"
          cancelUrl="http://localhost:8000/"
          // successUrl={`${window.location.origin}/success/`}
          // cancelUrl={`${window.location.origin}/`}
          //  allowedCountries={["US", "GB", "CA", "DE"]}
          billingAddressCollection={true}
        >
          <LanguageContext.Provider
            value={{
              actLanguage,
              setActLanguage,
              handleLanguageChange,
            }}
          >
            <CssBaseline />
            <ThemeProvider theme={theme}>
              <SimpleReactLightbox>
                <DrawerMenuContextProvider>
                  <DrawerCartContextProvider>
                    {children}
                  </DrawerCartContextProvider>
                </DrawerMenuContextProvider>
              </SimpleReactLightbox>
            </ThemeProvider>
          </LanguageContext.Provider>
        </CartProvider>
      </CurrencyContext.Provider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
