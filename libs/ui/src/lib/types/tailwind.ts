import type colors from "tailwindcss/colors";

type TailwindColors = keyof typeof colors;
type ColorName = Exclude<
  TailwindColors,
  | "inherit"
  | "current"
  | "transparent"
  | "black"
  | "white"
  | "lightBlue"
  | "warmGray"
  | "trueGray"
  | "coolGray"
  | "blueGray"
>;
type ColorShade =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "950";

export type Color = `${ColorName}-${ColorShade}`;
export type FillColor = `fill-${"transparent" | `${ColorName}-${ColorShade}`}`;
export type TextColor = `text-${"transparent" | `${ColorName}-${ColorShade}`}`;
