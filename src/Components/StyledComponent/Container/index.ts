import { ContainerProps } from "src/Utils/Types";
import styled from "styled-components";
import { colors } from "src/Utils/Colors";

export const Container = styled("div")<Partial<ContainerProps>>(
  ({
    padding,
    width,
    height,
    bg,
    justify,
    align,
    direction,
    margin,
    marginTop,
    marginRight,
    marginLeft,
    marginBottom,
    flex,
    position,
    top,
    bottom,
    left,
    right
  }) => ({
    backgroundColor: bg || colors.white,
    width: width || "100%",
    padding: padding || "3px",
    height: height,
    display: "flex",
    flex:flex,
    flexDirection: direction || "row",
    justifyContent: justify || "center",
    alignItems: align || "center",
    margin: margin || "0px",
    marginTop: marginTop,
    marginBottom: marginBottom,
    marginLeft: marginLeft,
    marginRight: marginRight,
    position:position || "relative",
    top:top,
    bottom:bottom,
    right:right,
    left:left
  })
);
