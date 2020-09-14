import React, { useContext } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
// import Link from "gatsby-plugin-transition-link"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
// import Skus from "../components/Products/Skus"
import SkusEur from "../components/Products/SkusEur"
import SkusUsd from "../components/Products/SkusUsd"
import SkusRub from "../components/Products/SkusRub"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import { CurrencyContext } from "../components/layout"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Fab from "@material-ui/core/Fab"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import Zoom from "@material-ui/core/Zoom"
import Scroll from "../components/ScrollToTopBtn"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  contentWrapper: {
    flex: "1 0 auto",
    marginTop: "10vh",
  },
}))

// function ScrollTop(props) {
//   const { children, window } = props
//   const classes = useStyles()
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 100,
//   })

//   const handleClick = event => {
//     const anchor = (event.target.ownerDocument || document).querySelector(
//       "#back-to-top-anchor"
//     )

//     if (anchor) {
//       anchor.scrollIntoView({ behavior: "smooth", block: "center" })
//     }
//   }

//   return (
//     <Zoom in={trigger}>
//       <div
//         onClick={handleClick}
//         role="presentation"
//         className={classes.scrollToTopBtn}
//       >
//         {children}
//       </div>
//     </Zoom>
//   )
// }

// ScrollTop.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default function IndexPage(props) {
  const classes = useStyles()

  const { actCurrency, handleCurrencyChange } = useContext(CurrencyContext)

  return (
    <div className={classes.root} id="root">
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <CssBaseline />

      <Header />
      {/* <div id="back-to-top-anchor" /> */}
      <Scroll showBelow={250} />
      <Container maxWidth="md" className={classes.contentWrapper}>
        <h1>Hi people</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum modi
          itaque ratione. Omnis, dolores voluptas quia recusandae similique
          corrupti quae vero veniam id blanditiis beatae, nobis est totam. Dicta
          voluptates illo ipsum excepturi ipsam saepe dolorum molestiae,
          quisquam officia rerum illum, eaque in quaerat corporis omnis repellat
          vero sint. Exercitationem, libero, nisi ab quod atque accusantium
          voluptatum recusandae quibusdam asperiores eligendi, incidunt amet.
          Ipsa qui consequatur laboriosam libero omnis. Magnam omnis, soluta
          ipsam quaerat ut, impedit reprehenderit placeat ipsum repudiandae
          maxime aut itaque molestias amet, et sit commodi nisi! Iusto ratione
          distinctio et aperiam quaerat nisi aut odit optio impedit.
        </p>
        {actCurrency === "EUR" ? (
          <SkusEur />
        ) : actCurrency === "USD" ? (
          <SkusUsd />
        ) : actCurrency === "RUB" ? (
          <SkusRub />
        ) : (
          <SkusUsd />
        )}
        {/* <Skus /> */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum modi
          itaque ratione. Omnis, dolores voluptas quia recusandae similique
          corrupti quae vero veniam id blanditiis beatae, nobis est totam. Dicta
          voluptates illo ipsum excepturi ipsam saepe dolorum molestiae,
          quisquam officia rerum illum, eaque in quaerat corporis omnis repellat
          vero sint. Exercitationem, libero, nisi ab quod atque accusantium
          voluptatum recusandae quibusdam asperiores eligendi, incidunt amet.
          Ipsa qui consequatur laboriosam libero omnis. Magnam omnis, soluta
          ipsam quaerat ut, impedit reprehenderit placeat ipsum repudiandae
          maxime aut itaque molestias amet, et sit commodi nisi! Iusto ratione
          distinctio et aperiam quaerat nisi aut odit optio impedit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Dolorum modi itaque
          ratione. Omnis, dolores voluptas quia recusandae similique corrupti
          quae vero veniam id blanditiis beatae, nobis est totam. Dicta
          voluptates illo ipsum excepturi ipsam saepe dolorum molestiae,
          quisquam officia rerum illum, eaque in quaerat corporis omnis repellat
          vero sint. Exercitationem, libero, nisi ab quod atque accusantium
          voluptatum recusandae quibusdam asperiores eligendi, incidunt amet.
          Ipsa qui consequatur laboriosam libero omnis. Magnam omnis, soluta
          ipsam quaerat ut, impedit reprehenderit placeat ipsum repudiandae
          maxime aut itaque molestias amet, et sit commodi nisi! Iusto ratione
          distinctio et aperiam quaerat nisi aut odit optio impedit.
        </p>
        {/* <ScrollTop {...props}>
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop> */}
      </Container>

      <Footer />
    </div>
  )
}
