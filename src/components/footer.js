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
  root: {
    backgroundColor: theme.palette.primary.main,
    maxWidth: "100%",
  },
  content: {
    marginTop: 100,
    color: "black",
  },

  title: {
    marginBottom: 20,
  },
  title2: {
    marginBottom: 10,
  },
  textFieldEmail: {
    marginRight: 5,
    marginBottom: 3,
  },
  btnSubscribe: {
    marginBottom: 30,
    marginTop: 1,
  },
  payCards: {
    display: "flex",
    marginTop: 20,
  },
  payCardItem: {
    width: 32,
    height: 20,
    marginRight: 5,
  },
  link: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      color: "white",
    },
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

const Footer = () => {
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

  const [show, setShow] = useState(false)

  function startInView() {
    setShow(true)
  }
  function stopInView() {
    setShow(false)
  }

  useEffect(() => {
    inView(".selector").once("enter", startInView)
    inView.threshold(0.8)
  })

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div style={{ overflow: "hidden" }} className="selector">
        <Slide in={show} timeout={1500} direction="up">
          <div>
            <Container maxWidth="md" className={classes.content}>
              <Grid container className={classes.root} spacing={3}>
                <Grid item md={4}>
                  <Typography variant="body2" className={classes.title}>
                    CONTACTS
                  </Typography>
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque incidunt dolorem aut explicabo aliquid. Quae officiis
                    voluptate nemo dolore cum animi inventore possimus, beatae
                    incidunt praesentium.
                  </Typography>

                  <div className={classes.payCards}>
                    <img
                      src={payCard1}
                      title="visa"
                      className={classes.payCardItem}
                    />
                    <img
                      src={payCard2}
                      title="master card"
                      className={classes.payCardItem}
                    />
                    <img
                      src={payCard3}
                      title="maestro"
                      className={classes.payCardItem}
                    />
                    <img
                      src={payCard4}
                      title="pay pal"
                      className={classes.payCardItem}
                    />
                    <img
                      src={payCard5}
                      title="american express"
                      className={classes.payCardItem}
                    />

                    <img
                      src={payCard6}
                      title="google pay"
                      className={classes.payCardItem}
                    />

                    <img
                      src={payCard7}
                      title="apple pay"
                      className={classes.payCardItem}
                    />
                  </div>
                </Grid>
                <Grid item md={4}>
                  <Typography variant="body2" className={classes.title}>
                    SERVICES
                  </Typography>
                  <Typography variant="caption">
                    <Link to="#" className={classes.link}>
                      Terms of Service
                    </Link>
                    <br />
                    <Link to="#" className={classes.link}>
                      Returns & Refund
                    </Link>
                    <br />
                    <Link to="#" className={classes.link}>
                      Privacy Policy
                    </Link>
                    <br />
                    <Link to="#" className={classes.link}>
                      Shipping Policy
                    </Link>
                    <br />
                    <Link to="#" className={classes.link}>
                      About us
                    </Link>
                    <br />
                    <Link to="#" className={classes.link}>
                      Contact us
                    </Link>
                  </Typography>
                </Grid>
                <Grid item md={4}>
                  <Typography variant="body2" className={classes.title2}>
                    JOIN OUR NEWSLETTER
                  </Typography>
                  <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <FormControl className={classes.formControl}>
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
                  <Typography variant="body2" className={classes.title2}>
                    FOLLOW US
                  </Typography>
                  <Link to="#" className={classes.link}>
                    {" "}
                    <FacebookIcon />{" "}
                  </Link>
                  <Link to="#" className={classes.link}>
                    <InstagramIcon />{" "}
                  </Link>
                </Grid>
              </Grid>
              <div
                style={{
                  textAlign: "center",
                  minHeight: "50px",
                }}
              >
                © {new Date().getFullYear()}, MyStore
              </div>
            </Container>
          </div>
        </Slide>
      </div>
    </div>
  )
}

Footer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Footer
