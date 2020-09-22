import React, { useContext, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { graphql, StaticQuery } from "gatsby"
import { LanguageContext } from "../../components/layout"
import { CurrencyContext } from "../../components/layout"

import funnyBunny from "../../images/products/funny_bunny/funny_bunny_2.jpg"
import catClock from "../../images/products/cat_clock/cat_clock_1.jpg"
import magicHat from "../../images/products/magic_hat/magic_hat_1.jpg"
import funnyBunny2 from "../../images/products/funny_bunny/funny_bunny_1.jpg"

const window = require("global/window")

const useStyles = makeStyles(theme => ({
  root: {
    // textDecorationColor: "red",
    // color: "gray",
    textDecorationStyle: "solid",
    display: "inline",
  },
  oldPrice: {
    textDecorationLine: "line-through",
    // textDecorationColor: "red",
    // color: "gray",
    textDecorationStyle: "solid",
    display: "inline",
  },
  imgCard: {
    transition: "1s",

    "&:hover": {
      transform: "scale(1.2)",
    },
  },
}))

const funnyBunny_priceUsd = "price_1HNFcEHwITO0GSJr0BcSMXko"
const funnyBunny_priceEur = "price_1HGjcwHwITO0GSJrJEhUG0Aq"
const funnyBunny_priceRub = "price_1HNFbdHwITO0GSJr0cQgGhYQ"

const catClock_priceUsd = "price_1HNFdPHwITO0GSJrVsLO5IdU"
const catClock_priceEur = "price_1HH7DcHwITO0GSJrZz3vg6d9"
const catClock_priceRub = "price_1HNFdwHwITO0GSJrpygU4AcI"

const magicHat_priceUsd = "price_1HMt2gHwITO0GSJrR1YuszFV"
const magicHat_priceEur = "price_1HHUu9HwITO0GSJrsoWoL51O"
const magicHat_priceRub = "price_1HNFZ7HwITO0GSJrieVKbbte"

const funnyBunnyId = "prod_HqQT1Nni7ovIFj"
const catClockId = "prod_HqorCSiih5dZWu"
const magicHatId = "prod_HrDKbPKHBo6qPK"

export function ItemName(props) {
  const classes = useStyles()
  return (
    <p className={classes.root}>
      {props.sku.productId === funnyBunnyId
        ? props.actLanguage === "ENG"
          ? "Funny bunny"
          : props.actLanguage === "DEU"
          ? "Lustiger Hase"
          : props.actLanguage === "RUS"
          ? "Забавный кролик"
          : ""
        : null}
      {props.sku.productId === catClockId
        ? props.actLanguage === "ENG"
          ? "Cat clock"
          : props.actLanguage === "DEU"
          ? "Katzenuhr"
          : props.actLanguage === "RUS"
          ? "Кошка-часы"
          : ""
        : null}
      {props.sku.productId === magicHatId
        ? props.actLanguage === "ENG"
          ? "Magic hat"
          : props.actLanguage === "DEU"
          ? "Magischer Hut"
          : props.actLanguage === "RUS"
          ? "Волшебная шляпа"
          : ""
        : null}
    </p>
  )
}

export function ItemDescription(props) {
  const classes = useStyles()
  return (
    <p className={classes.root}>
      {props.sku.productId === funnyBunnyId
        ? props.actLanguage === "ENG"
          ? "Great funny bunny"
          : props.actLanguage === "DEU"
          ? "Toller lustiger Hase"
          : props.actLanguage === "RUS"
          ? "Отличный забавный кролик"
          : ""
        : null}
      {props.sku.productId === catClockId
        ? props.actLanguage === "ENG"
          ? "Cat clock, color: black"
          : props.actLanguage === "DEU"
          ? "Katzenuhr, Farbe: schwarz"
          : props.actLanguage === "RUS"
          ? "Кошка-часы, цвет: чёрный"
          : ""
        : null}
      {props.sku.productId === magicHatId
        ? props.actLanguage === "ENG"
          ? "Magic hat, color: gray"
          : props.actLanguage === "DEU"
          ? "Magischer Hut, Farbe: grau"
          : props.actLanguage === "RUS"
          ? "Волшебная шляпа, цвет: серый"
          : ""
        : null}
    </p>
  )
}

export function OldPrice(props) {
  const classes = useStyles()
  return (
    <p className={classes.oldPrice}>
      {props.sku.sku === "price_1HGjcwHwITO0GSJrJEhUG0Aq"
        ? window.innerWidth <= 599
          ? "€999,00"
          : "999,00 €"
        : ""}
      {props.sku.sku === "price_1HH7DcHwITO0GSJrZz3vg6d9"
        ? window.innerWidth <= 599
          ? "€55,00"
          : "55,00 €"
        : ""}
    </p>
  )
}

export function ImgLocal(props) {
  const classes = useStyles()
  return (
    <>
      {props.sku.productId === funnyBunnyId ? (
        <img src={funnyBunny} className={classes.imgCard} />
      ) : props.sku.productId === catClockId ? (
        <img src={catClock} className={classes.imgCard} />
      ) : props.sku.productId === magicHatId ? (
        <img src={magicHat} className={classes.imgCard} />
      ) : null}
    </>
  )
}

export function Img2Local(props) {
  const classes = useStyles()
  return (
    <>
      {props.sku.productId === funnyBunnyId ? (
        <img src={funnyBunny2} className={classes.imgCard} />
      ) : props.sku.productId === catClockId ? (
        <img src={funnyBunny2} className={classes.imgCard} />
      ) : props.sku.productId === magicHatId ? (
        <img src={funnyBunny2} className={classes.imgCard} />
      ) : null}
    </>
  )
}

export function description(productId) {
  if (productId === funnyBunnyId) {
    return "Great funny bunny"
  } else if (productId === catClockId) {
    return "Cat clock, color: black"
  } else if (productId === magicHatId) {
    return "Magic hat, color: gray"
  } else {
    return null
  }
}
