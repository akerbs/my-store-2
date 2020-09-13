import React, { useState } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Link from "gatsby-plugin-transition-link"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import Skus from "../components/Products/Skus"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import { useShoppingCart } from "use-shopping-cart"
import CartItem from "../components/Cart/CartItem"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  contentWrapper: {
    flex: "1 0 auto",
  },
   btnWrapper: {
    textAlign: "center",
    margin: 20,
  },
}))

const CartPage = (props) => {
  const classes = useStyles()
   const [loading, setLoading] = useState(false)

    const {
    incrementItem,
    decrementItem,
    removeItem,
    cartCount,
    cartDetails,
    // totalPrice,
    formattedTotalPrice,
    redirectToCheckout,
  } = useShoppingCart()

  return (
    <div className={classes.root} id="root">
      <SEO title="Cart" keywords={[`gatsby`, `application`, `react`]} />
      <CssBaseline />
      <Header />
      <Container maxWidth="md" className={classes.contentWrapper}>
         {Object.keys(cartDetails).map((item, idx) => {
          const cartItem = cartDetails[item]
          return (
            <CartItem
              onClose={props.onClose}
              open={props.open}
              key={idx}
              item={cartItem}
              incrementItem={incrementItem}
              decrementItem={decrementItem}
              removeItem={removeItem}
            />
          )
        })}

          {!cartCount ? (
        <Typography variant="body2" align="center" color="textSecondary">
          Cart is empty...
        </Typography>
      ) : (
        <>
          {/* <Coupon /> */}
          <Typography
            variant="body2"
            align="right"
            color="textPrimary"
            style={{ marginRight: 10 }}
          >
            Subtotal: {formattedTotalPrice}
          </Typography>

          <div className={classes.btnWrapper}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              disabled={loading}
              onClick={() => {
                setLoading(true)
                redirectToCheckout()
              }}
            >
              {loading ? "Loading..." : "Checkout"}
            </Button>
          </div>
        </>
      )}
      </Container>
      <Footer />
    </div>
  )
}

export default CartPage
