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
// import { useShoppingCart } from "use-shopping-cart"
import { LanguageContextProvider } from "../context/LanguageContext"
import { LanguageContext } from "../context/LanguageContext"

const useStyles = makeStyles(theme => ({}))

// const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
const stripePromise = loadStripe(
  "pk_test_51HGUuRHwITO0GSJr0YK6FwbE17LUTst9UCvm2uH0RdjBtAnQJqgPmDn0BSunRc8FIEXRW3HatsFd1uDHkfaGJtUm00IA2780Iw"
)
export const CurrencyContext = createContext()

function Layout({ children }) {
  const classes = useStyles()
  // { actCurrency, handleCurrencyChange } = useContext(CurrencyContext)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  // const { clearCart } = useShoppingCart()
  const [actCurrency, setActCurrency] = useState("EUR")

  function handleCurrencyChange(event) {
    setActCurrency(event.target.value)
    //  forceUpdate()
    // clearCart()
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
          // currency={
          //   actCurrency === "EUR"
          //     ? "EUR"
          //     : actCurrency === "USD"
          //     ? "USD"
          //     : "USD"
          // }
          // currency="EUR"
          // successUrl="https://kerbs-store-1.vercel.app/success/"
          // cancelUrl="https://kerbs-store-1.vercel.app/"
          successUrl="http://localhost:8000/success/"
          cancelUrl="http://localhost:8000/"
          // successUrl={`${window.location.origin}/success/`}
          // cancelUrl={`${window.location.origin}/`}
          //  allowedCountries={["US", "GB", "CA", "DE"]}
          billingAddressCollection={true}
        >
          <CssBaseline />
          <ThemeProvider theme={theme}>
            <SimpleReactLightbox>
              <LanguageContextProvider>
                <DrawerMenuContextProvider>
                  <DrawerCartContextProvider>
                    {children}
                  </DrawerCartContextProvider>
                </DrawerMenuContextProvider>
              </LanguageContextProvider>
            </SimpleReactLightbox>
          </ThemeProvider>
        </CartProvider>
      </CurrencyContext.Provider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
