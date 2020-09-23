import React, { useState, useContext } from "react"
import { graphql } from "gatsby"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import Container from "@material-ui/core/Container"
// import "swiper/swiper-bundle.css"
// import "./swiper.css"
// import SwiperCore, {
//   Thumbs,
//   Zoom,
//   Navigation,
//   EffectFade,
//   Pagination,
// } from "swiper"
import Grid from "@material-ui/core/Grid"
// import { SRLWrapper } from "simple-react-lightbox"
import withWidth from "@material-ui/core/withWidth"
import Hidden from "@material-ui/core/Hidden"
import PropTypes from "prop-types"

import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
// import ThumbsSwiper from "../../components/Swipers/ThumbsSwiper"
// import MainSwiper from "../../components/Swipers/MainSwiper"
import Button from "@material-ui/core/Button"
import { DrawerCartContext } from "../context/DrawerCartContext"
import { CurrencyContext } from "../components/layout"
import { LanguageContext } from "../components/layout"
// import Counter from "../../components/Cart/Counter"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  contentWrapper: {
    flex: "1 0 auto",

    marginTop: 120,
    [theme.breakpoints.down("sm")]: {
      marginTop: 55,
      paddingLeft: 0,
      paddingRight: 0,
    },
  },
}))

// SwiperCore.use([Thumbs, Zoom, Navigation, EffectFade, Pagination])

// const lightboxOptions = {
//   settings: {},
//   caption: { showCaption: false },
//   buttons: {
//     showDownloadButton: false,
//     showAutoplayButton: false,
//     showFullscreenButton: false,
//     size: "50px",
//   },
//   thumbnails: { showThumbnails: false },
// }

// const lightboxCallbacks = {
//   onLightboxOpened: () => {
//     document.body.style.position = "fixed"
//   },
//   onLightboxClosed: () => {
//     const scrollY = document.body.style.top
//     document.body.style.position = ""
//   },
// }

export default function ProductPageTemplate(props) {
  const { actCurrency } = useContext(CurrencyContext)
  const { actLanguage } = useContext(LanguageContext)
  const classes = useStyles()

  const itemInfo = {
    name:
      actLanguage === "ENG"
        ? props.item.nameEng
        : actLanguage === "DEU"
        ? props.item.nameDeu
        : actLanguage === "RUS"
        ? props.item.nameRus
        : null,
    description:
      actLanguage === "ENG"
        ? props.item.descriptionEng
        : actLanguage === "DEU"
        ? props.item.descriptionDeu
        : actLanguage === "RUS"
        ? props.item.descriptionRus
        : null,
    productId: props.item.productId,

    sku:
      actCurrency === "USD"
        ? props.item.skuUsd
        : actCurrency === "EUR"
        ? props.item.skuEur
        : actCurrency === "RUB"
        ? props.item.skuRub
        : null,
    price:
      actCurrency === "USD"
        ? props.item.priceUsd
        : actCurrency === "EUR"
        ? props.item.priceEur
        : actCurrency === "RUB"
        ? props.item.priceRub
        : null,
    currency:
      actCurrency === "USD"
        ? props.item.currencyUsd
        : actCurrency === "EUR"
        ? props.item.currencyEur
        : actCurrency === "RUB"
        ? props.item.currencyRub
        : null,
    currencySign:
      actCurrency === "USD"
        ? props.item.currencySignUsd
        : actCurrency === "EUR"
        ? props.item.currencySignEur
        : actCurrency === "RUB"
        ? props.item.currencySignRub
        : null,
    image: props.item.firstImg,
    firstImg: props.item.firstImg,
    scndImg: props.item.scndImg,
    hovered: props.item.hovered,
  }

  // const { addItem } = useShoppingCart()
  // const { handleDrawerCartOpen } = useContext(DrawerCartContext)
  // const { actCurrency } = useContext(CurrencyContext)
  // const [thumbsSwiper, setThumbsSwiper] = useState(null)
  // const [quantityOfItem, setQuantityOfItem] = useState(1)

  // function increment() {
  //   setQuantityOfItem(quantityOfItem + 1)
  // }

  // function decrement() {
  //   setQuantityOfItem(quantityOfItem - 1)
  // }

  console.log("DATA:", itemInfo)

  return (
    <div className={classes.root} id="root">
      <SEO title="Funny bunny" keywords={[`gatsby`, `application`, `react`]} />
      <CssBaseline />
      <Header />
      <Container maxWidth="md" className={classes.contentWrapper} id="wrapper">
        <h1>{itemInfo.name}</h1>
        {/*  
     
     
        <Hidden smDown id="big">
          <Grid container spacing={0}>
            <Grid item md={6}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <SRLWrapper
                    options={lightboxOptions}
                    // callbacks={lightboxCallbacks}
                  >
                    <MainSwiper
                      thumbsSwiper={thumbsSwiper}
                      setThumbsSwiper={setThumbsSwiper}
                      data={props.data}
                    />
                  </SRLWrapper>
                </Grid>
                <Grid item>
                  <ThumbsSwiper
                    thumbsSwiper={thumbsSwiper}
                    setThumbsSwiper={setThumbsSwiper}
                    data={props.data}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={6}>
              Price:{" "}
              {formatCurrencyString({
                value: parseInt(ItemInfo.price),
                currency: ItemInfo.currency,
              })}{" "}
              <br /> <br />
              <Counter
                incrementItem={increment}
                decrementItem={decrement}
                quantity={quantityOfItem}
                sku={ItemInfo}
              />{" "}
              <br /> <br />
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={() => {
                  addItem(ItemInfo, quantityOfItem)
                  handleDrawerCartOpen()
                }}
              >
                ADD TO CART
              </Button>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus non optio unde quisquam aspernatur praesentium dolorum
                magni! Repellendus esse quis aliquid! Nemo cum aliquam suscipit
                dolorum temporibus numquam quasi consequatur quia sequi earum
                nisi optio adipisci, ut, at quibusdam ex sapiente facilis
                mollitia incidunt dolor. Dolorum reprehenderit ex libero earum!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus non optio unde quisquam aspernatur praesentium dolorum
                magni! Repellendus esse quis aliquid! Nemo cum aliquam suscipit
                dolorum temporibus numquam quasi consequatur quia sequi earum
                nisi optio adipisci, ut, at quibusdam ex sapiente facilis
                mollitia incidunt dolor. Dolorum reprehenderit ex libero earum!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus non optio unde quisquam aspernatur praesentium dolorum
                magni! Repellendus esse quis aliquid! Nemo cum aliquam suscipit
                dolorum temporibus numquam quasi consequatur quia sequi earum
                nisi optio adipisci, ut, at quibusdam ex sapiente facilis
                mollitia incidunt dolor. Dolorum reprehenderit ex libero earum!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Doloribus non optio unde quisquam aspernatur praesentium dolorum
                optio adipisci, ut, at quibusdam ex sapiente facilis mollitia
                incidunt dolor. Dolorum reprehenderit ex libero earum!
              </p>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp id="little">
          <MainSwiper
            thumbsSwiper={thumbsSwiper}
            setThumbsSwiper={setThumbsSwiper}
            data={props.data}
          />
          <br /> <br />
          <Container>
            Price:{" "}
            {formatCurrencyString({
              value: parseInt(ItemInfo.price),
              currency: ItemInfo.currency,
            })}{" "}
            <br />
            <Button
              size="small"
              color="primary"
              onClick={() => {
                addItem(ItemInfo)
                handleDrawerCartOpen()
              }}
            >
              ADD TO CART
            </Button>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            non optio unde quisquam aspernatur praesentium dolorum magni!
            Repellendus esse quis aliquid! Nemo cum aliquam suscipit dolorum
            temporibus numquam quasi consequatur quia sequi earum nisi optio
            adipisci, ut, at quibusdam ex sapiente facilis mollitia incidunt
            dolor. Dolorum reprehenderit ex libero earum! Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Doloribus non optio unde quisquam
            aspernatur praesentium dolorum magni! Repellendus esse quis aliquid!
            Nemo cum aliquam suscipit dolorum temporibus numquam quasi
            consequatur quia sequi earum nisi optio adipisci, ut, at quibusdam
            ex sapiente facilis mollitia incidunt dolor. Dolorum reprehenderit
            ex libero earum! Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Doloribus non optio unde quisquam aspernatur praesentium
            dolorum magni! Repellendus esse quis aliquid! Nemo cum aliquam
            suscipit dolorum temporibus numquam quasi consequatur quia sequi
            earum nisi optio adipisci, ut, at quibusdam ex sapiente facilis
            mollitia incidunt dolor. Dolorum reprehenderit ex libero earum!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            non optio unde quisquam aspernatur praesentium dolorum optio
            adipisci, ut, at quibusdam ex sapiente facilis mollitia incidunt
            dolor. Dolorum reprehenderit ex libero earum!
          </Container>
        </Hidden>
     
      */}
      </Container>
      <Footer />
    </div>
  )
}

// ProductPageTemplate.propTypes = {
//   width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
// }
// export default withWidth()(ProductPageTemplate)
