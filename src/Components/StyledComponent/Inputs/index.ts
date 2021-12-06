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
    color: color || colors.white,
    backgroundColor: bg || colors.gray,
    width: width,
    padding: padding || "5px",
    height: height,
    border:
      `${borderWidth} ${borderType} ${borderColor}` ||
      `1px solid ${colors.border}`,
    borderRadius: radius || "3px",
  })
);
