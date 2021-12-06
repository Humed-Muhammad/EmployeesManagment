import { ImageProps } from "src/Utils/Types";
import styled from "styled-components";


export const Avatar = styled("img")<Partial<ImageProps>>(
  ({ padding, width, height, radius }) => ({
    width: width || "55px",
    padding: padding || "5px",
    height: height ||"55px",
    borderRadius: radius || "50%",
  })
);
