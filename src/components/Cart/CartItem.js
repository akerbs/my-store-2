import React, { useState, useContext } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import IconButton from "@material-ui/core/IconButton"
import CloseIcon from "@material-ui/icons/Close"
import Counter from "./Counter"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import ButtonBase from "@material-ui/core/ButtonBase"
import Divider from "@material-ui/core/Divider"
import { Link, navigate } from "gatsby"
import Slide from "@material-ui/core/Slide"
import Fade from "@material-ui/core/Fade"
import { LanguageContext } from "../../context/LanguageContext"
import { ItemName, ItemDescription, OldPrice, ImgLocal } from "../Products/DB"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "auto",
    padding: 8,
  },
  imgBtn: {
    width: 100,
    height: 100,
    display: " inline-block",
    overflow: "hidden",
    transform: "translateZ(0)",
    borderRadius: "5%",
    // maskImage: "radial-gradient(white, black)",
    // borderRadius: "100%",
  },
  img: {
    margin: "auto",
    display: "block",
    width: 100,
    height: 100,
  },
}))

const CartItem = props => {
  const classes = useStyles()
  const { actLanguage } = useContext(LanguageContext)

  return (
    <>
      <CssBaseline />
      <Slide in={props.open} timeout={900} direction="up">
        <div>
          <Fade in={props.open} timeout={2000}>
            <div className={classes.root}>
              <Paper className={classes.paper} elevation="0">
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <ButtonBase
                      onClick={() => {
                        navigate(`/products/${props.sku.name}`)
                        props.onClose()
                      }}
                      className={classes.imgBtn}
                    >
                      {/* <Link
                        to={`/products/${props.sku.name}`}
                        style={{ textDecoration: "none" }}
                      > */}
                      <ImgLocal
                        sku={props.sku.sku}
                        alt={
                          <ItemName
                            sku={props.sku.sku}
                            actLanguage={actLanguage}
                          />
                        }
                        className={classes.img}
                      />
                      {/* </Link> */}
                    </ButtonBase>
                  </Grid>
                  <Grid
                    item
                    xs={8}
                    sm
                    container
                    style={{ paddingLeft: "8px", paddingRight: 0 }}
                  >
                    <Grid item xs container direction="column" spacing={1}>
                      <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                          <ItemName
                            sku={props.sku.sku}
                            actLanguage={actLanguage}
                          />
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                          <ItemDescription
                            sku={props.sku.sku}
                            actLanguage={actLanguage}
                          />
                        </Typography>
                        <Typography variant="body2" color="textPrimary">
                          <Counter
                            incrementItem={props.incrementItem}
                            decrementItem={props.decrementItem}
                            removeItem={props.removeItem}
                            quantity={props.sku.quantity}
                            sku={props.sku.sku}
                          />{" "}
                          {/* {(props.item.currency = "eur" ? "€" : props.item.currency)}{" "} */}
                          {/* {corrPrice} */} {props.sku.formattedValue}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">
                        {" "}
                        <IconButton
                          size="small"
                          onClick={() => props.removeItem(props.sku.sku)}
                          style={{ padding: 0 }}
                        >
                          <CloseIcon fontSize="small" />
                        </IconButton>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Paper>
              <Divider variant="middle" light={true} />
            </div>
          </Fade>
        </div>
      </Slide>
    </>
  )
}

export default CartItem
