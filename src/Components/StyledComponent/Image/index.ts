import { ImageProps } from "src/Utils/Types";
import styled from "styled-components";
import { colors } from "src/Utils/Colors";

export const Image = styled("img")<Partial<ImageProps>>(
  ({ padding, width, height, radius }) => ({
    width: width,
    padding: padding || "5px",
    height: height,
    borderRadius: radius || "3px",
  })
);
