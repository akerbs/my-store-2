import React, { useState, useContext } from "react"
import { ItemsContext } from "../../context/ItemsContext"
import { LanguageContext } from "../layout"
import { CurrencyContext } from "../layout"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import ItemCard from "./ItemCard"

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
})

export default function () {
  const classes = useStyles()
  const { products, changeHover } = useContext(ItemsContext)
  const { actCurrency } = useContext(CurrencyContext)
  const { actLanguage } = useContext(LanguageContext)
  const { addItem } = useShoppingCart()

  return (
    <div className={classes.root}>
      {products.map((item, productId) => {
        const newSku = {
          name:
            actLanguage === "ENG"
              ? item.nameEng
              : actLanguage === "DEU"
              ? item.nameDeu
              : actLanguage === "RUS"
              ? item.nameRus
              : null,
          description:
            actLanguage === "ENG"
              ? item.descriptionEng
              : actLanguage === "DEU"
              ? item.descriptionDeu
              : actLanguage === "RUS"
              ? item.descriptionRus
              : null,
          productId: item.productId,

          sku:
            actCurrency === "USD"
              ? item.skuUsd
              : actCurrency === "EUR"
              ? item.skuEur
              : actCurrency === "RUB"
              ? item.skuRub
              : null,
          price:
            actCurrency === "USD"
              ? item.priceUsd
              : actCurrency === "EUR"
              ? item.priceEur
              : actCurrency === "RUB"
              ? item.priceRub
              : null,
          currency:
            actCurrency === "USD"
              ? item.currencyUsd
              : actCurrency === "EUR"
              ? item.currencyEur
              : actCurrency === "RUB"
              ? item.currencyRub
              : null,
          currencySign:
            actCurrency === "USD"
              ? item.currencySignUsd
              : actCurrency === "EUR"
              ? item.currencySignEur
              : actCurrency === "RUB"
              ? item.currencySignRub
              : null,
          image: item.firstImg,
          firstImg: item.firstImg,
          scndImg: item.scndImg,
          hovered: item.hovered,
        }

        return (
          <ItemCard
            sku={newSku}
            key={productId}
            id={productId}
            onMouseOver={changeHover}
            onMouseOut={changeHover}
          />
        )
      })}
    </div>
  )
}
