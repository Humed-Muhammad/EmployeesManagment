import styled from "styled-components";
import { colors } from "src/Utils/Colors";
import { DividerProps } from "src/Utils/Types";
export const Divider = styled("hr")<Partial<DividerProps>>(
  ({ width, height, spacing, thickness, direction="horizontal", color }) => ({
    width: direction == "horizontal" ? width || "100%" : "0px",
    height: direction == "vertical" ? height || "40px" : "0px",
    margin: spacing || "0px",
    borderBottomWidth: direction == "horizontal" ? thickness || "2px" : "0px",
    borderColor: color || colors.primary,
    borderRightWidth: direction == "vertical" ? thickness || "2px" : "0px",
    padding: "0px",
  })
);
