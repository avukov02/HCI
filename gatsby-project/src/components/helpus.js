/** @jsx jsx */
import { jsx } from "theme-ui"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"
import useMediaQuery from "@material-ui/core/useMediaQuery"

function renderImage({ file }) {
  return <Img fluid={file.childImageSharp.fluid} />
}

const Help = () => {
  const isLarge = useMediaQuery("(min-width: 1000px)")
  const isnotLargeatAll = useMediaQuery("(max-width: 1000px,min-width:600px)")
  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        margin: isLarge ? "0px 10px 20px 10px" : "0px 0px 20px 00px",
        padding: isLarge ? "30px 0 30px 0" : "40px 0 10px 0",
      }}
    >
      <h2
        style={{
          color: "#9AD1C4",
          fontSize: isLarge ? "35px" : "33px ",
          marginTop: "0px",
          textAlign: "center",
        }}
      >
        Privremeno skrbništvo
      </h2>
      <p
        style={{
          fontSize: isLarge ? "20px" : "18px ",
          color: "#A8A7AF",
          margin: isLarge
            ? "0 150px 0px 150px"
            : isnotLargeatAll
            ? "0 50px 50px 50px"
            : "0 50px 50px 50px",
          letterSpacing: "1px",
          lineHeight: "1.8",
        }}
      >
        Privremeno skrbništvo je veoma cijenjena i dobrodošla pomoć u našoj
        udruzi. Kako broj napuštenih životinja premašuje broj slobodnih mjesta u
        azilu, uvijek su nam potrebne tete i stričeki čuvalice. Privremeno
        udomiteljstvo podrazumijeva da ćete na smještaj primiti nekog od naših
        štićenika. Trajanje takvog udomiteljstva odredit ćete na samom početku u
        dogovoru s članovima udruge te ćete za to vrijeme voditi adekvatnu brigu
        o životinji koja Vam je povjerena na skrb. Udruga na takvom smještaju
        plaća sve troškove koje životinja ima, ali se čuvalice obvezuju redovito
        slati fotografije životinje koju imaju na smještaju (osim ako se
        dogovori da će netko drugi odraditi taj dio) te brinuti o njima) te, kao
        što smo već rekli, adekvatno brinuti o njoj. Kako biste i Vi i mi bili
        sigurni da će sve dobro funkcionirati, privremenim udomiteljima dajemo
        na potpis Ugovor o pivremenom udomiteljstvu koji regulira obostrana
        prava i obveze. Ako želite pomoći nekoj životinji, a niste u mogućnosti
        trajno je udomiti, ovo je pravi izbor za Vas. Ukoliko ste zainteresirani
        za ovakav vid pomoći, javite nam se što prije – čuvalica nikad dosta!
      </p>
      <div
        style={{
          marginTop: isLarge ? "30px" : "-10px",
          marginBottom: "30px",
          position: "relative",
          minWidth: "250px",
          minHeigh: "100px",
        }}
      >
        <StaticQuery
          query={graphql`
            query {
              file(relativePath: { eq: "images/udomime.png" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `}
          render={renderImage}
        />
      </div>

      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "0px -8px 20px -8px",
          padding: isLarge ? "30px 0 30px 0" : "0",
        }}
      >
        <h2
          style={{
            color: "#9AD1C4",
            fontSize: isLarge ? "35px" : "33px ",
            marginTop: "0px",
            textAlign: "center",
          }}
        >
          Volontiraj
        </h2>
        <p
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "1.5em",
            fontStyle: "italic",
            lineHeight: " 1.4 ",
            color: "#C6DAD5",
            marginLeft: "50px",
            marginRight: "50px",
            textAlign: "left",
          }}
        >
          Volonteri ne dobivaju plaću, ne zato što su bezvrijedni već zato što
          su neprocjenjivi.
        </p>
        <p
          style={{
            fontSize: isLarge ? "20px" : "18px ",
            color: "#A8A7AF",
            margin: isLarge
              ? "0 150px 0px 150px"
              : isnotLargeatAll
              ? "0 50px 70px 50px"
              : "0 50px 70px 50px",
            letterSpacing: "1px",
            lineHeight: "1.8",
          }}
        >
          Biti volonter u Sigurnoj Kućici znači raditi nešto besplatno za
          štićenike udruge i nju samu. Volontiranje se u udruzi odvija u skladu
          s postojećim Zakonom o volonterstvu. U Sigurnoj kućici se može
          volontirati na razne načine – možete doći u azil i družiti se s našim
          psima, čistiti njihove boxeve, hraniti ih ili pak pomagati u izgradnji
          skloništa. Van azila možete pomoći Šapici s organizacijom raznih
          promotivnih aktivnosti ili sami, primjerice, organizirati potrepštine
          za naše pse. Također možete sudjelovati u radu Udruge iz pozadine –
          puno je zadataka koji se svakodnevno obavljaju kao i onih povremenih,
          a sve se dogovara u skladu s Vašim mogućnostima i željama. Ukoliko
          želite postati volonter Udruge Šapica, molimo Vas da nam se javite na
          našu mail adresu: sigurnakucica@gmail.com
        </p>
      </div>

      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "0px -8px 20px -8px",
          padding: isLarge ? "30px 0 30px 0" : "0",
        }}
      >
        <h2
          style={{
            color: "#9AD1C4",
            fontSize: isLarge ? "35px" : "33px ",
            marginTop: "0px",
            textAlign: "center",
          }}
        >
          Doniraj
        </h2>
        <div
          style={{
            fontSize: isLarge ? "20px" : "18px ",
            color: "#A8A7AF",
            margin: isLarge
              ? "0 150px 0px 150px"
              : isnotLargeatAll
              ? "0 50px 70px 50px"
              : "0 50px 70px 50px",
            letterSpacing: "1px",
            lineHeight: "1.8",
          }}
        >
          <p>
            Donacije su ono što nam omogućava adekvatnu brigu o našim
            štićenicima. Donirati možete novac, hranu, dekice, dotrajalu
            posteljinu, sredstva protiv nametnika i sve ostalo što bi nam moglo
            koristiti u radu. Ako se odlučite donirati novac, to možete učiniti
            na naše račun: Račun za donacije:
          </p>
          <p style={{ textAlign: "center" }}>
            HR6723600001102587785, ZABAHR2X{" "}
          </p>
          <p style={{ textAlign: "center" }}> paypal:sigurnakucica@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Help
