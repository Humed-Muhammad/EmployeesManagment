import { TextProps } from "src/Utils/Types";
import styled from "styled-components";
import { colors } from "src/Utils/Colors";

export const Text = styled("button")<Partial<TextProps>>(
  ({ color, padding, size, weight, justify }) => ({
    color: color || colors.gray,
    padding: padding || "0px",
    textAlign: justify || "start",
    fontSize: size || "15px",
    fontWeight: weight || "normal",
    border: "none",
    background: "none",
  })
);
