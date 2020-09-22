import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import { LanguageContext } from "../layout"
import { CurrencyContext } from "../layout"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles({
  root: {
    width: 300,
    // height: 300,
    margin: 2,
  },
})

export default function (props) {
  const classes = useStyles()
  console.log("SKU:", props.sku)
  const { actCurrency } = useContext(CurrencyContext)
  const { actLanguage } = useContext(LanguageContext)
  const { addItem } = useShoppingCart()

  return (
    <>
      <div className={classes.root}>
        <Card
          id={props.id}
          onMouseOver={() => props.onMouseOver(props.id, true)}
          onMouseOut={() => props.onMouseOut(props.id, false)}
        >
          <img
            src={props.sku.hovered ? props.sku.scndImg : props.sku.firstImg}
            alt={props.sku.name}
          />
        </Card>
        {props.sku.name}
        <br />
        {(props.sku.price / 100).toFixed(2)} {props.sku.currencySign}
        <Button
          //  className={classes.btnAddToCart}
          variant="outlined"
          fullWidth
          size="small"
          onClick={() => {
            addItem(props.sku)
            // handleSnakebarShow()
            //  handleDrawerCartOpen()
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
    </>
  )
}
