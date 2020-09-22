import React, { useState, createContext } from "react"
import funnyBunny from "../images/products/funny_bunny/funny_bunny_2.jpg"
import catClock from "../images/products/cat_clock/cat_clock_1.jpg"
import magicHat from "../images/products/magic_hat/magic_hat_1.jpg"
import funnyBunny2 from "../images/products/funny_bunny/funny_bunny_1.jpg"

const ItemsContext = createContext()

const ItemsContextProvider = props => {
  const [products, setProducts] = useState([
    {
      productId: "prod_HqQT1Nni7ovIFj",
      nameEng: "Funny bunny",
      nameDeu: "Lustiger Hase",
      nameRus: "Забавный кролик",
      descriptionEng: "Great funny bunny",
      descriptionDeu: "Toller lustiger Hase",
      descriptionRus: "Отличный забавный кролик",
      firstImg: funnyBunny,
      scndImg: funnyBunny2,
      hovered: false,
      skuUsd: "price_1HNFcEHwITO0GSJr0BcSMXko",
      priceUsd: 104900,
      currencyUsd: "USD",
      currencySignUsd: "$",
      skuEur: "price_1HGjcwHwITO0GSJrJEhUG0Aq",
      priceEur: 88800,
      currencyEur: "EUR",
      currencySignEur: "€",
      skuRub: "price_1HNFbdHwITO0GSJr0cQgGhYQ",
      priceRub: 7913000,
      currencyRub: "RUB",
      currencySignRub: "₽",
    },
    {
      productId: "prod_HqorCSiih5dZWu",
      nameEng: "Cat clock",
      nameDeu: "Katzenuhr",
      nameRus: "Кошка-часы",
      descriptionEng: "Cat clock, color: black",
      descriptionDeu: "Katzenuhr, Farbe: schwarz",
      descriptionRus: "Кошка-часы, цвет: чёрный",
      firstImg: catClock,
      scndImg: funnyBunny2,
      hovered: false,
      skuUsd: "price_1HNFdPHwITO0GSJrVsLO5IdU",
      priceUsd: 5800,
      currencyUsd: "USD",
      currencySignUsd: "$",
      skuEur: "price_1HH7DcHwITO0GSJrZz3vg6d9",
      priceEur: 4900,
      currencyEur: "EUR",
      currencySignEur: "€",
      skuRub: "price_1HNFdwHwITO0GSJrpygU4AcI",
      priceRub: 436500,
      currencyRub: "RUB",
      currencySignRub: "₽",
    },
    {
      productId: "prod_HrDKbPKHBo6qPK",
      nameEng: "Magic hat",
      nameDeu: "Magischer Hut",
      nameRus: "Волшебная шляпа",
      descriptionEng: "Magic hat, color: gray",
      descriptionDeu: "Magischer Hut, Farbe: grau",
      descriptionRus: "Волшебная шляпа, цвет: серый",
      firstImg: magicHat,
      scndImg: funnyBunny2,
      hovered: false,
      skuUsd: "price_1HMt2gHwITO0GSJrR1YuszFV",
      priceUsd: 3700,
      currencyUsd: "USD",
      currencySignUsd: "$",
      skuEur: "price_1HHUu9HwITO0GSJrsoWoL51O",
      priceEur: 3300,
      currencyEur: "EUR",
      currencySignEur: "€",
      skuRub: "price_1HNFZ7HwITO0GSJrieVKbbte",
      priceRub: 294000,
      currencyRub: "RUB",
      currencySignRub: "₽",
    },
  ])

  const changeHover = (val, bool) => {
    // console.log(val)
    setProducts(prevstate =>
      prevstate.map((item, productId) =>
        // console.log("STATES", item) ||
        productId === val ? { ...item, hovered: bool } : { ...item }
      )
    )
  }

  return (
    <ItemsContext.Provider
      value={{
        products,
        changeHover,
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  )
}

export { ItemsContextProvider, ItemsContext }
