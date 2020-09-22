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

const useStyles = makeStyles({
  root: {
    overflow: "hidden",
  },
  card: {
    width: 300,
    // height: 300,
    margin: 2,
  },
  btnAddToCart: {
    color: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.contrastText,
    },
  },
})

export default function (props) {
  const classes = useStyles()
  // console.log("SKU:", props.sku)
  const { actCurrency } = useContext(CurrencyContext)
  const { actLanguage } = useContext(LanguageContext)
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
    props.sku.sku === "prod_HqQT1Nni7ovIFj"
      ? "funny-bunny"
      : props.sku.sku === "prod_HqorCSiih5dZWu"
      ? "cat-clock"
      : props.sku.sku === "prod_HrDKbPKHBo6qPK"
      ? "magic-hat"
      : null

  return (
    <>
      <div className={classes.root} id="selector">
        <Slide in={show} timeout={700} direction="up">
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
                  className={classes.img}
                  src={
                    props.sku.hovered ? props.sku.scndImg : props.sku.firstImg
                  }
                  alt={props.sku.name}
                />
              </Link>
            </Card>
            {props.sku.name}
            <br />
            {(props.sku.price / 100).toFixed(2)} {props.sku.currencySign}
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
          </div>
        </Slide>
      </div>
    </>
  )
}
