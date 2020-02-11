/** @jsx jsx */
import { jsx } from "theme-ui"
import fcb from "../assets/fcb.png"
import ig from "../assets/igg.png"
import yt from "../assets/yt.png"

const slike = [
  {
    src: fcb,
    link: "https://www.facebook.com/sigurnakucica2017/",
  },
  {
    src: ig,
    link: "https://www.instagram.com/sigurnakucica/?hl=hr",
  },
  {
    src: yt,
    link: "https://www.youtube.com/playlist?list=UUfm5RJyMTm5WbZWd76oEfQA",
  },
]
const FooterIcon = () => {
  return (
    <div>
      {slike.map(({ link, src }) => (
        <a key={link} href={link}>
          <img
            alt="slikezafooter"
            src={src}
            sx={{
              height: "footerimg",
              width: "auto",
              transition: "all .2s ease-in-out",
          "&:hover": {
            transform:"scale(1.1)",
          }, }
            }
          ></img>
        </a>
      ))}
    </div>
  )
}
export default FooterIcon
