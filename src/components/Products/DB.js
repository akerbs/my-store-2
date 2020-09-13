import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { graphql, StaticQuery } from "gatsby"

import funnyBunny from "../../images/products/funny_bunny/funny_bunny_2.jpg"
import catClock from "../../images/products/cat_clock/cat_clock_1.jpg"
import magicHat from "../../images/products/magic_hat/magic_hat_1.jpg"
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

export function ItemName(props) {
  const classes = useStyles()
  return (
    <p className={classes.root}>
      {props.sku === funnyBunny_priceUsd ||
      props.sku === funnyBunny_priceEur ||
      props.sku === funnyBunny_priceRub
        ? props.actLanguage === "ENG"
          ? "Funny bunny"
          : props.actLanguage === "DEU"
          ? "Lustiger Hase"
          : props.actLanguage === "RUS"
          ? "Забавный кролик"
          : ""
        : null}
      {props.sku === catClock_priceUsd ||
      props.sku === catClock_priceEur ||
      props.sku === catClock_priceRub
        ? props.actLanguage === "ENG"
          ? "Cat clock"
          : props.actLanguage === "DEU"
          ? "Katzenuhr"
          : props.actLanguage === "RUS"
          ? "Кошка-часы"
          : ""
        : null}
      {props.sku === magicHat_priceUsd ||
      props.sku === magicHat_priceEur ||
      props.sku === magicHat_priceRub
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
      {props.sku === funnyBunny_priceUsd ||
      props.sku === funnyBunny_priceEur ||
      props.sku === funnyBunny_priceRub
        ? props.actLanguage === "ENG"
          ? "Great funny bunny"
          : props.actLanguage === "DEU"
          ? "Toller lustiger Hase"
          : props.actLanguage === "RUS"
          ? "Отличный забавный кролик"
          : ""
        : null}
      {props.sku === catClock_priceUsd ||
      props.sku === catClock_priceEur ||
      props.sku === catClock_priceRub
        ? props.actLanguage === "ENG"
          ? "Cat clock, color: black"
          : props.actLanguage === "DEU"
          ? "Katzenuhr, Farbe: schwarz"
          : props.actLanguage === "RUS"
          ? "Кошка-часы, цвет: чёрный"
          : ""
        : null}
      {props.sku === magicHat_priceUsd ||
      props.sku === magicHat_priceEur ||
      props.sku === magicHat_priceRub
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
      {props.sku === "price_1HGjcwHwITO0GSJrJEhUG0Aq"
        ? window.innerWidth <= 599
          ? "€999,00"
          : "999,00 €"
        : ""}
      {props.sku === "price_1HH7DcHwITO0GSJrZz3vg6d9"
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
      {props.sku === funnyBunny_priceUsd ||
      props.sku === funnyBunny_priceEur ||
      props.sku === funnyBunny_priceRub ? (
        <img src={funnyBunny} className={classes.imgCard} />
      ) : props.sku === catClock_priceUsd ||
        props.sku === catClock_priceEur ||
        props.sku === catClock_priceRub ? (
        <img src={catClock} className={classes.imgCard} />
      ) : props.sku === magicHat_priceUsd ||
        props.sku === magicHat_priceEur ||
        props.sku === magicHat_priceRub ? (
        <img src={magicHat} className={classes.imgCard} />
      ) : null}
    </>
  )
}

// export default function ProductPage(props) {
//   let page =
//     props.sku === funnyBunny_priceUsd ||
//     props.sku === funnyBunny_priceEur ||
//     props.sku === funnyBunny_priceRub
//       ? "funny_bunny"
//       : props.sku === catClock_priceUsd ||
//         props.sku === catClock_priceEur ||
//         props.sku === catClock_priceRub
//       ? "cat_clock"
//       : props.sku === magicHat_priceUsd ||
//         props.sku === magicHat_priceEur ||
//         props.sku === magicHat_priceRub
//       ? "magic_hat"
//       : ""

//   return page
// }

// export default function ProductPage(props) {
//   let page =
//     props.data.prices.edges.node.id === funnyBunny_priceUsd ||
//     props.data.prices.edges.node.id === funnyBunny_priceEur ||
//     props.data.prices.edges.node.id === funnyBunny_priceRub
//       ? "funny_bunny"
//       : props.data.prices.edges.node.id === catClock_priceUsd ||
//         props.data.prices.edges.node.id === catClock_priceEur ||
//         props.data.prices.edges.node.id === catClock_priceRub
//       ? "cat_clock"
//       : props.data.prices.edges.node.id === magicHat_priceUsd ||
//         props.data.prices.edges.node.id === magicHat_priceEur ||
//         props.data.prices.edges.node.id === magicHat_priceRub
//       ? "magic_hat"
//       : ""

//   return page
// }

// export const query = graphql`
//   query {
//     prices: allStripePrice {
//       edges {
//         node {
//           id
//         }
//       }
//     }
//   }
// `
