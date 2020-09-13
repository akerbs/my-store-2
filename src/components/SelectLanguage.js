import React, { useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
// import Link from "gatsby-plugin-transition-link"
import { Link } from "gatsby"
import { LanguageContext } from "../context/LanguageContext"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    // minWidth: 80,
    margin: 0,
    paddingRight: 5,
  },
  icon: {
    paddingLeft: 1,
  },
}))

export default function SelectLanguage() {
  const classes = useStyles()

  const { actLanguage, handleLanguageChange } = useContext(LanguageContext)

  return (
    <>
      <FormControl variant="standard" className={classes.formControl}>
        <Select
          classes={{
            icon: classes.icon,
          }}
          disableUnderline={true}
          autoWidth
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={actLanguage}
          onChange={e => {
            handleLanguageChange(e)
          }}
          // onChange={handleCurrencyChange}
          style={{ color: "white" }}
        >
          <MenuItem value={"ENG"}>EN</MenuItem>
          <MenuItem value={"DEU"}>DE</MenuItem>
          <MenuItem value={"RUS"}>RU</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}
