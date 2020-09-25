import React, { useContext } from "react"
import Typography from "@material-ui/core/Typography"
import Breadcrumbs from "@material-ui/core/Breadcrumbs"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import { LanguageContext } from "../components/layout"

const useStyles = makeStyles(theme => ({
  root: {},
  links: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}))

function handleClick(event) {
  event.preventDefault()
  console.info("You clicked a breadcrumb.")
}

export default function (props) {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
      <Link
        color="inherit"
        href="/"
        onClick={handleClick}
        className={classes.links}
      >
        {actLanguage === "DEU"
          ? "Home"
          : actLanguage === "RUS"
          ? "Главная"
          : actLanguage === "ENG"
          ? "Home"
          : null}
      </Link>
      <Link
        color="inherit"
        href="#"
        onClick={handleClick}
        className={classes.links}
      >
        {actLanguage === "DEU"
          ? "Alle Produkten"
          : actLanguage === "RUS"
          ? "Все товары"
          : actLanguage === "ENG"
          ? "All products"
          : null}
      </Link>
      <Typography color="textSecondary">{props.data.name}</Typography>
    </Breadcrumbs>
  )
}
