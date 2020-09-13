import React from "react"
import { graphql, StaticQuery } from "gatsby"
import SkuCard from "./SkuCard"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  allItemsViewWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "1rem 0 1rem 0",
  },
}))

export default props => {
  const classes = useStyles()
  return (
    <StaticQuery
      query={graphql`
        query {
          prices: allStripePrice(
            filter: { active: { eq: true }, currency: { eq: "rub" } }
            sort: { fields: [unit_amount] }
          ) {
            edges {
              node {
                id
                active
                currency
                unit_amount
                product {
                  id
                  name
                  images
                  description
                }
              }
            }
          }
        }
      `}
      render={({ prices }) => (
        <div className={classes.allItemsViewWrapper}>
          {prices.edges.map(({ node: price }) => {
            const newSku = {
              sku: price.id,
              image: price.product.images,
              name: price.product.name,
              description: price.product.description,
              price: price.unit_amount,
              currency: price.currency,
            }
            return <SkuCard key={price.id} sku={newSku} />
          })}
        </div>
      )}
    />
  )
}
