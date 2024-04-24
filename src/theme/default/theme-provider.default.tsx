import { ThemeProvider } from "@emotion/react"
import { createTheme } from "./styles/theme"
import { ThemeStyle } from "./them-style.default"


type Props = {
  scheme: string
  children?: React.ReactNode
}

export const ThemeDefaultProvider = ({ scheme, children }: Props) => {
  const theme = createTheme({
    scheme: scheme === "light" ? "light" : "dark",
  })

  return (
    <ThemeProvider theme={theme}>
      <ThemeStyle />
      {children}
    </ThemeProvider>
  )
}
