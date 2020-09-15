import React, { useState, createContext } from "react"

const LanguageContext = createContext()

const LanguageContextProvider = props => {
  const [actLanguage, setActLanguage] = useState("DEU")

  function handleLanguageChange(event) {
    setActLanguage(event.target.value)
  }

  return (
    <LanguageContext.Provider
      value={{
        actLanguage,
        handleLanguageChange,
      }}
    >
      {props.children}
    </LanguageContext.Provider>
  )
}

export { LanguageContextProvider, LanguageContext }
