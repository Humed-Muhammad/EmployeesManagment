import { InputProps } from "src/Utils/Types";
import styled from "styled-components";
import { colors } from "src/Utils/Colors";

export const Input = styled("input")<Partial<InputProps>>(
  ({
    color,
    padding,
    width,
    height,
    bg,
    radius,
    borderWidth,
    borderType,
    borderColor,
  }) => ({
    color: color || colors.gray,
    backgroundColor: bg || colors.white,
    width: width,
    padding: padding || "5px",
    height: height,
    borderWidth:borderWidth|| "1px",
    borderStyle: borderType ||"solid",
    borderColor:borderColor || colors.yellow,
    borderRadius: radius || "3px",
    opacity:1,
    outline: "none"
  })
);
