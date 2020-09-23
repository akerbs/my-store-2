import React, { useContext, useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import theme from "../theme"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import { LanguageContext } from "../layout"
import { CurrencyContext } from "../layout"
import { DrawerCartContext } from "../../context/DrawerCartContext"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import Button from "@material-ui/core/Button"
import inView from "in-view"
import Slide from "@material-ui/core/Slide"
import { Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
  },
  card: {
    maxWidth: 300,
    // height: 300,

    margin: 10,
    // borderRadius: "5px 10px 10px 5px",
    // maskImage: "radial-gradient(white, black)",
    // borderRadius: "100%",
    transition: "0.3s linear",
    "&:hover": {
      // boxShadow: " 0 0 10px rgba(0, 0, 0, 0.5)",
      boxShadow: " -3px 2px 10px -1px rgba(0, 0, 0, 0.3)",
    },
  },
  btnAddToCart: {
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.contrastText,
    },
  },
  img: {
    width: "100%",
    transition: "1s",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
})

export default function (props) {
  const classes = useStyles()
  const { addItem } = useShoppingCart()
  const { handleDrawerCartOpen } = useContext(DrawerCartContext)

  const [show, setShow] = useState(false)
  function startInView() {
    setShow(true)
  }
  useEffect(() => {
    inView("#selector").once("enter", startInView)
  })

  const LinkToProductPage =
    props.sku.productId === "prod_HqQT1Nni7ovIFj"
      ? "funny-bunny"
      : props.sku.productId === "prod_HqorCSiih5dZWu"
      ? "cat-clock"
      : props.sku.productId === "prod_HrDKbPKHBo6qPK"
      ? "magic-hat"
      : null

  return (
    <>
      <div className={classes.root} id="selector">
        {/* <Slide in={show} timeout={700} direction="up"> */}
        <div>
          <Card
            className={classes.card}
            id={props.id}
            onMouseOver={() => props.onMouseOver(props.id, true)}
            onMouseOut={() => props.onMouseOut(props.id, false)}
          >
            <Link
              to={`/products/${LinkToProductPage}`}
              className={classes.link}
            >
              <img
                style={{ width: "100%" }}
                className={classes.img}
                src={props.sku.hovered ? props.sku.scndImg : props.sku.firstImg}
                alt={props.sku.name}
              />
            </Link>
            <Box
              textAlign="center"
              lineHeight={0.7}
              style={{ marginBottom: 30 }}
            >
              {/* <Typography component="div"> */}
              <Box fontSize="1rem" fontWeight="fontWeightBold">
                {props.sku.name}
              </Box>
              <br />
              <Box fontSize="0.8rem" fontWeight="fontWeightBold">
                {props.sku.currencySign} {(props.sku.price / 100).toFixed(2)}
              </Box>
              {/* </Typography> */}
            </Box>
          </Card>
        </div>
        {/* </Slide> */}
      </div>
    </>
  )
}

/* {props.sku.hovered && (
                  <Button
                    className={classes.btnAddToCart}
                    variant="outlined"
                    fullWidth
                    size="small"
                    onClick={() => {
                      addItem(props.sku)
                      handleDrawerCartOpen()
                      console.log("CLICK", props.sku)
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
                )} */
