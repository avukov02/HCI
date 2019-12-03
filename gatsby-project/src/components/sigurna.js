/** @jsx jsx */
import React from "react"
import { jsx, useThemeUI } from "theme-ui"

const Sigurna = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "0px -8px 20px -8px",
        padding: "30px 0 30px 0",
      }}
    >
      <p style={{ color: "#78758E", fontSize: "25px" }}>
        {" "}
        Udruga za udomljavanje napuštenih pasa
      </p>
      <h2 style={{ color: "#9AD1C4", fontSize: "35px", marginTop: "0px" }}>
        Sigurna Kućica
      </h2>
      <p
        style={{
          fontSize: "20px",
          textAlign: "center",
          color: "#A8A7AF",
          margin: "0 400px 0 400px",
          letterSpacing: "1px",
          lineHeight: "1.8",
        }}
      >
        Dragi ljubitelji životinja, Udruga smo za pomoć životinjama iz Velike
        Gorice i imamo velik broj pasa na skrbi koji trebaju cijepljenja,
        sterilizacije, ampule, ogrlice, povodce i sve ostalo što ih približava
        zauvijek domu. Primarno se bavimo udomljavanjem pasa iz Skloništa Sisak.
        Donacijom nam pomažete biti njihovim skrbnicima do udomljenja i biti
        njihov glas u svijetu u kojem se vapaj nemoćnih sve rjeđe čuje. Svaka
        pomoć je dobrodošla. Oni trebaju nas, a mi trebamo vas.
      </p>
    </div>
  )
}

export default Sigurna
