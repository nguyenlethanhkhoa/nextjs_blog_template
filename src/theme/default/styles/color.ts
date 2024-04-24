import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  indigo,
  indigoDark,
} from "@radix-ui/colors"

export type Colors = typeof Color.light & typeof Color.dark

export const Color = {
  light: {
    ...indigo,
    ...gray,
    ...blue,
    ...red,
    ...green,
  },
  dark: {
    ...indigoDark,
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
}
