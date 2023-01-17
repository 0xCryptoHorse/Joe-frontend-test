import styled from "styled-components";
import { Box } from ".";

interface FlexProps {
  row?: boolean;
  col?: boolean;
  flexFull?: boolean;
  center?: boolean;
  justifyCenter?: boolean;
  alignCenter?: boolean;
  spaceBetween?: boolean;
  spaceAround?: boolean;
}
export const Flex = styled(Box)<FlexProps>`
  flex-direction: ${(p) => (p.row ? "row" : p.col ? "column" : "")};
  flex-grow: ${(p) => (p.flexFull ? "1" : "")};
  justify-content: ${(p) => (p.center ? "center" : p.justifyCenter ? "center" : p.spaceBetween ? "space-between" : p.spaceAround ? "space-around" : "")};
  align-items: ${(p) => (p.center ? "center" : p.alignCenter ? "center" : "")};
`;
Flex.defaultProps = {
  display: "flex",
};

export const ContainerFluid = styled(Flex)``;
ContainerFluid.defaultProps = {
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
};
export const Container = styled(Flex)``;
Container.defaultProps = {
  width: "100%",
  // maxWidth: "1200px",
  px: "18px",
};
