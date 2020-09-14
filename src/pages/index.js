import React, { useContext } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"
import SEO from "../components/seo"
import SkusEur from "../components/Products/SkusEur"
import SkusUsd from "../components/Products/SkusUsd"
import SkusRub from "../components/Products/SkusRub"
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles"
import { CurrencyContext } from "../components/layout"
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

export default function IndexPage(props) {
  const classes = useStyles()

  const { actCurrency, handleCurrencyChange } = useContext(CurrencyContext)

  return (
    <div className={classes.root} id="root">
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <CssBaseline />
      <Header />
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
      </Container>

      <Footer />
    </div>
  )
}
