import { ButtonProps } from "src/Utils/Types";
import styled, { ThemeProps } from "styled-components";
import { colors } from "src/Utils/Colors";

export const Button = styled("button")<Partial<ButtonProps>>(
  ({ color, padding, width, height, bg, radius }) => ({
    color: color || colors.white,
    backgroundColor: bg || colors.gray,
    width: width,
    padding: padding || "5px",
    height: height,
    border: "none",
    borderRadius: radius || "3px",
    cursor:"pointer"
  })
);
