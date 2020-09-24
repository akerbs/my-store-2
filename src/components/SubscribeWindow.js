import React from "react"
import Typography from "@material-ui/core/Typography"
import Modal from "@material-ui/core/Modal"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import IconButton from "@material-ui/core/IconButton"
import HighlightOffIcon from "@material-ui/icons/HighlightOff"

const window = require("global/window")

const modalWindowWidth = window.innerWidth <= 599 ? 320 : "50vw"

const mainTitelLeftMargin = window.innerWidth <= 599 ? "4%" : "16%"

const useStyles = makeStyles(theme => ({
  modalWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    overflowX: "hidden",
    [theme.breakpoints.down("xs")]: {
      overflowY: "scroll",
    },
    maxHeight: " 100vh",
    width: modalWindowWidth,
    backgroundColor: "rgba(249,234,207)",
    border: "2px solid rgba(133,26,29)",
    boxShadow: theme.shadows[5],

    zIndex: 9999,
    position: "fixed",
    outline: 1,
    padding: "50px 10px",
    fontSize: 10,
  },
}))

export default function Impressum(props) {
  const classes = useStyles()

  return (
    <Modal
      className={classes.modalWrapper}
      onClose={props.onClose}
      open={props.open}
    >
      <div className={classes.paper}>
        {/* <Grid container spacing={0}>
          <Grid item xs={3}>
        
          </Grid>
          </Grid> */}
        <Typography>test</Typography>
      </div>
    </Modal>
  )
}
