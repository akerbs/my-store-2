import React, { useState, useEffect } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"
import Title from "../components/Title"

import Header from "../components/header"
import Footer from "../components/footer"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Container from "@material-ui/core/Container"
import Grid from "@material-ui/core/Grid"
import TransitionLink from "gatsby-plugin-transition-link"
import { TransitionState } from "gatsby-plugin-transition-link"
import posed from "react-pose"

const useStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: "lime",
  },
  inner: {
    marginTop: "100px",
    display: "flex",
    justifyContent: "center",
  },
  other: {
    fontFamily: "Poppins",
    // marginTop: "300px",
    // width: "340px",
    fontWeight: 300,
    lineHeight: "24px",
    fontSize: "14px",
  },
  box: {
    backgroundColor: "yellow",
    width: 100,
    height: 100,
  },
}))

const SecondPage = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <div className={classes.inner}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Title lineContent="Hello World" lineContent2="I'm Anatol K." />
            </Grid>
            <Grid item xs={12}>
              <p className={classes.other}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellendus autem nostrum commodi magnam doloribus laborum sed
                blanditiis facilis quisquam provident in ipsam similique magni
                quidem voluptatum, nulla ut? Pariatur saepe odio quia aspernatur
                ipsam cumque qui ipsa laudantium, mollitia nihil voluptatibus ea
                aliquid soluta vero nulla sint quas! Libero, id.
              </p>
            </Grid>
          </Grid>
        </div>

        <ALink />

        <Footer />
      </Container>
    </div>
  )
}

export default SecondPage

const ALink = () => {
  return (
    <>
      <AniLink
        to="/"
        // paintDrip
        // color="rebeccapurple"
        // hex="#334b99"
        //////////////////
        cover
        // bg="#334b99"
        bg="
    url(https://source.unsplash.com/random)
    center / cover   /* position / size */
    no-repeat        /* repeat */
    fixed            /* attachment */
    padding-box      /* origin */
    content-box      /* clip */
    white            /* color */
  "
        //////////////////
        // swipe
        // fade
        duration={2}
        direction="up"
        // top="entry"
        // top="exit"
        // entryOffset={80}
      >
        Go to Home Page
      </AniLink>
    </>
  )
}
