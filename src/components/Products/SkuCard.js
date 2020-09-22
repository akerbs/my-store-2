import React, { useContext, useState, useEffect } from "react"
import Button from "@material-ui/core/Button"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import { makeStyles } from "@material-ui/core/styles"
// import Link from "gatsby-plugin-transition-link"
import { Link } from "gatsby"
// import SnakeBar from "../SnakeBar"
// import { OldPrice } from "./OldPrice"
import { DrawerCartContext } from "../../context/DrawerCartContext"
import theme from "../theme"
// import { LanguageContext } from "../../context/LanguageContext"
import { LanguageContext } from "../../components/layout"
import inView from "in-view"
import Slide from "@material-ui/core/Slide"

import {
  ItemName,
  ItemDescription,
  // ProductPage,
  OldPrice,
  ImgLocal,
  Img2Local,
} from "./DB"

const useStyles = makeStyles({
  noHover: {
    backgroundColor: "black",
  },
  yesHover: {
    backgroundColor: "tomato",
  },

  root: {
    maxWidth: 300,
    // maxHeight: 300,
    margin: 2,
    // marginBottom: "1rem",
    // padding: "1rem",
    transition: "0.3s linear",
    "&:hover": {
      boxShadow: " 0 0 10px rgba(0, 0, 0, 0.5)",
    },
  },

  link: {
    textDecoration: "none",
    color: theme.palette.primary.main,

    "&:active": {
      color: theme.palette.primary.dark,
    },
  },
  img: {
    transition: "1s",
    width: 300,
    height: 300,

    "&:hover": {
      transform: "scale(1.2)",
    },
  },
  btnAddToCart: {
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.contrastText,
    },
  },
})

const SkuCard = ({ sku, id }, props) => {
  const classes = useStyles()
  const { addItem } = useShoppingCart()
  const { handleDrawerCartOpen } = useContext(DrawerCartContext)

  const { actLanguage } = useContext(LanguageContext)

  const [show, setShow] = useState(false)

  const [hover, setHover] = useState(false)

  function startInView() {
    setShow(true)
  }
  function stopInView() {
    setShow(false)
  }

  useEffect(() => {
    inView(".selector").once("enter", startInView)
  })

  // const [openSnackbar, setOpenSnackbar] = useState(false)

  // const handleSnakebarShow = () => {
  //   setOpenSnackbar(true)
  // }
  // const handleSnakebarClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return
  //   }
  //   setOpenSnackbar(false)
  // }

  const LinkToProductPage =
    sku.name === "Funny Bunny"
      ? "funny-bunny"
      : sku.name === "Cat Clock"
      ? "cat-clock"
      : sku.name === "Magic Hat"
      ? "magic-hat"
      : null

  // console.log("keyProp", id)
  // let card = document.getElementById("prod_HqQT1Nni7ovIFj")
  // console.log("card", card)

  // useEffect(() => {
  //   let card = document.getElementById("prod_HqQT1Nni7ovIFj")

  //   card.addEventListener(
  //     "mouseover",
  //     function () {
  //       console.log("Funny bunny is over mouse")
  //     },
  //     true
  //   )

  //   card.addEventListener(
  //     "mouseout",
  //     function () {
  //       console.log("Funny bunny is no more over mouse")
  //     },
  //     true
  //   )
  // }, [])

  return (
    <>
      <div style={{ overflow: "hidden" }} className="selector">
        <Slide in={show} timeout={700} direction="up">
          <div>
            <Card className={classes.root}>
              <Link
                // to={`/products/${ProductPage}`}
                to={`/products/${LinkToProductPage}`}
                className={classes.link}
                // style={{ textDecoration: "none", color: "tomato" }}
              >
                <CardActionArea>
                  <ImgLocal
                    sku={sku}
                    alt={<ItemName sku={sku} actLanguage={actLanguage} />}
                    className={classes.img}
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      <ItemName sku={sku} actLanguage={actLanguage} />
                    </Typography>
                    <Typography
                      variant="body2"
                      color="primary"
                      style={{ display: "inline" }}
                    >
                      <ItemDescription sku={sku} actLanguage={actLanguage} />
                      <br />
                      {actLanguage === "DEU"
                        ? "Preis"
                        : actLanguage === "RUS"
                        ? "Цена"
                        : actLanguage === "ENG"
                        ? "Price"
                        : "Price"}
                      :{" "}
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        style={{ display: "inline" }}
                      >
                        {" "}
                        <OldPrice sku={sku} />
                      </Typography>{" "}
                      {formatCurrencyString({
                        value: parseInt(sku.price),
                        currency: sku.currency,
                      })}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardActions>
                <Button
                  className={classes.btnAddToCart}
                  variant="outlined"
                  fullWidth
                  size="small"
                  onClick={() => {
                    addItem(sku)
                    // handleSnakebarShow()
                    handleDrawerCartOpen()
                  }}
                >
                  {actLanguage === "DEU"
                    ? "IN DEN WARENKORB LEGEN"
                    : actLanguage === "RUS"
                    ? "ДОБАВИТЬ В КОРЗИНУ"
                    : actLanguage === "ENG"
                    ? "ADD TO CART"
                    : "ADD TO CART"}
                </Button>
              </CardActions>
            </Card>
            {/* 
      <SnakeBar
        open={openSnackbar}
        onClose={handleSnakebarClose}
        message="Item added into cart"
      /> */}
          </div>
        </Slide>
      </div>
    </>
  )
}

export default SkuCard
