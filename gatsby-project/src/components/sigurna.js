/** @jsx jsx */
import { jsx } from "theme-ui"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const Sigurna = () => {
  const isLarge = useMediaQuery("(min-width: 900px)")
  const isnotLargeatAll = useMediaQuery("(max-width: 900px,min-width:600px)")
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        margin: "0px -8px 20px -8px",
        padding: isLarge ? "30px 0 30px 0" : "40px 0 10px 0",
      }}
    >
      <p
        style={{
          color: "#78758E",
          fontSize: isLarge ? "25px" : "23px ",
          textAlign: "center",
        }}
      >
        Udruga za udomljavanje napuštenih pasa
      </p>
      <h2
        style={{
          color: "#7DD0BC",
          fontSize: isLarge ? "35px" : "33px ",
          marginTop: "0px",
          textAlign: "center",
        }}
      >
        Sigurna Kućica
      </h2>
      <p
        style={{
          fontSize: isLarge ? "20px" : "18px ",
          textAlign: "center",
          color: "#808080",
          margin: isLarge
            ? "-15px 150px 0px 150px"
            : isnotLargeatAll
            ? "0 40px 70px 40px"
            : "0 30px 70px 30px",
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
