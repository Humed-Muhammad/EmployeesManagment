import { ContainerProps } from "src/Utils/Types";
import styled from "styled-components";
import { colors } from "src/Utils/Colors";

export const Card = styled("div")<Partial<ContainerProps>>(
  ({ padding, width, height, bg, justify, align, direction }) => ({
    backgroundColor: bg || colors.white,
    width: width || "100px",
    padding: padding || "3px",
    height: height || "200px",
    display: "flex",
    justifyContent: justify || "center",
    alignItems: align || "center",
    flexDirection: direction,
    boxShadow: "0px 2px 11px 3px rgba(221,221,221,0.87)",
    opacity:1
  })
);
