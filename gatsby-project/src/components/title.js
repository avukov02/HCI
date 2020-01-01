/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

const Title = ({ children, sx, ...props }) => (
  <Styled.h2
    {...props}
    sx={{
      ...sx,
      py: 0,
      // borderBottom: theme => `1px solid ${theme.colors.accent}`,
      color: "#9AD1C4",
    }}
  >
    {children}
  </Styled.h2>
)
export default Title