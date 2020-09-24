import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import CssBaseline from "@material-ui/core/CssBaseline"
import Typography from "@material-ui/core/Typography"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
// import Link from "gatsby-plugin-transition-link"
import { Link } from "gatsby"
import payCard1 from "../images/payCards/dark/1.png"
import payCard2 from "../images/payCards/dark/2.png"
import payCard3 from "../images/payCards/dark/3.png"
import payCard4 from "../images/payCards/dark/5.png"
import payCard5 from "../images/payCards/dark/22.png"
import payCard6 from "../images/payCards/googlePay.svg"
import payCard7 from "../images/payCards/applePay.svg"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers"
import FormControl from "@material-ui/core/FormControl"
import { navigate } from "gatsby"
import inView from "in-view"
import Slide from "@material-ui/core/Slide"

const useStyles = makeStyles(theme => ({
  textFieldEmail: {
    marginRight: 5,
    marginBottom: 3,
  },
  btnSubscribe: {
    marginBottom: 30,
    marginTop: 1,
  },
}))

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Feld ist erforderlich")
    .matches(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Please enter a valid email address"
    ),
  // .email('Please check your email')
})

export default function () {
  const classes = useStyles()
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  })
  const errorEmail = errors.hasOwnProperty("email") && errors["email"].message

  async function onSubmit(data) {
    try {
      let response = await fetch(
        "https://my-store-1-mailer.herokuapp.com/subscribe",
        // "http://localhost:3000/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )
      if (response.ok) {
        alert("Thank You!!! You have successfully subscribed :-)")
        //  await navigate("/")
        await reset(response)

        let responseJson = await response.json()
        return responseJson
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <FormControl>
        <TextField
          type="email"
          name="email"
          placeholder="Your email address..."
          variant="outlined"
          size="small"
          className={classes.textFieldEmail}
          inputRef={register}
          error={!!errorEmail}
          helperText={errorEmail}
        />
      </FormControl>
      <Button
        id="submit"
        name="submit"
        type="submit"
        variant="outlined"
        color="default"
        className={classes.btnSubscribe}
        // size="small"
      >
        Subscribe
      </Button>
    </form>
  )
}
