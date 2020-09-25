import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers"
import FormControl from "@material-ui/core/FormControl"
import { navigate } from "gatsby"
import inView from "in-view"
import { LanguageContext } from "../components/layout"
const window = require("global/window")

const inputPadding = window.innerWidth <= 599 ? "0.05vw" : "0.5vw"
const btnPadding = window.innerWidth <= 599 ? "0.05vw" : "0.3vw"
const fontBtn = window.innerWidth <= 599 ? "0.5rem" : "1rem"

const useStyles = makeStyles(theme => ({
  form: {
    marginBottom: "1%",
    padding: "0 0 0 10%",
  },
  formElement: {
    marginTop: "3px ",
  },
  btn: {
    marginTop: "3px ",
    padding: btnPadding,
    fontSize: fontBtn,
  },
}))

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Field is required")
    .min(3, "Name must be at-least 3 characters")
    .max(20, "Name must be 20 characters or less"),
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
  const { actLanguage } = useContext(LanguageContext)
  const classes = useStyles()
  const { register, handleSubmit, reset, errors } = useForm({
    resolver: yupResolver(schema),
  })
  const errorName = errors.hasOwnProperty("name") && errors["name"].message
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className={classes.form}>
      {/* <FormControl className={classes.formControl}> */}
      <TextField
        inputProps={{
          style: {
            padding: inputPadding,
          },
        }}
        // margin="dense"
        fullWidth={true}
        className={classes.formElement}
        type="text"
        name="name"
        placeholder={
          actLanguage === "DEU"
            ? "Ihr Name"
            : actLanguage === "RUS"
            ? "Ваше имя"
            : actLanguage === "ENG"
            ? "Your name"
            : null
        }
        variant="outlined"
        size="small"
        inputRef={register}
        error={!!errorName}
        helperText={errorName}
      />
      {/* </FormControl>
      <FormControl className={classes.formControl}> */}
      <TextField
        inputProps={{
          style: {
            padding: inputPadding,
          },
        }}
        fullWidth={true}
        // margin="dense"
        className={classes.formElement}
        type="email"
        name="email"
        placeholder={
          actLanguage === "DEU"
            ? "Ihre Emailadresse..."
            : actLanguage === "RUS"
            ? "Ваш электронный адрес..."
            : actLanguage === "ENG"
            ? "Your email address..."
            : null
        }
        variant="outlined"
        size="small"
        inputRef={register}
        error={!!errorEmail}
        helperText={errorEmail}
      />
      {/* </FormControl> */}
      <Button
        fullWidth={true}
        id="submit"
        name="submit"
        type="submit"
        variant="contained"
        color="primary"
        className={classes.btn}
        size="small"
      >
        sing up
      </Button>
    </form>
  )
}
