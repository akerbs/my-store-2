import React, { useEffect, useRef } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { gsap } from "gsap"

const useStyles = makeStyles(theme => ({
  pageTitle: {
    fontFamily: "Bebas Neue",
    fontSize: "52px",
    letterSpacing: "0.1rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "26px",
    },
  },
  lineWrap: {
    overflow: "hidden",
    height: "66px",
    [theme.breakpoints.down("sm")]: {
      height: "33px",
    },
  },
}))

const Title = ({ lineContent, lineContent2 }) => {
  const classes = useStyles()
  let line1 = useRef(null)
  let line2 = useRef(null)

  useEffect(() => {
    gsap.from([line1, line2], 0.8, {
      delay: 0.8,
      ease: "power3.out",
      y: 64,
      stragger: {
        amount: 0.15,
      },
    })
  }, [line1, line2])

  return (
    <h1 className={classes.pageTitle}>
      <div className={classes.lineWrap}>
        <div ref={el => (line1 = el)} className={classes.line}>
          {lineContent}
        </div>
      </div>

      <div className={classes.lineWrap}>
        <div ref={el => (line2 = el)} className={classes.line}>
          {lineContent2}
        </div>
      </div>
    </h1>
  )
}

export default Title
