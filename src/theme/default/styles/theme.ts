import { Theme } from "@emotion/react"
import { variables } from "./variable"
import { Colors, Color } from "./color"
import { zIndexes } from "./zIndex"

declare module "@emotion/react" {
  export interface Theme {
    scheme: Scheme
    colors: Colors
    zIndexes: typeof zIndexes
    variables: typeof variables
  }
}

export type Scheme = "light" | "dark"

type Options = {
  scheme: Scheme
}

export const createTheme = (options: Options): Theme => ({
  scheme: options.scheme,
  colors: Color[options.scheme],
  variables: variables,
  zIndexes: zIndexes,
})
