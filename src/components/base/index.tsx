import styled from "styled-components";

import {
  background,
  BackgroundProps,
  border,
  BorderProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
} from "styled-system";

export interface AllProps
  extends BackgroundProps,
    BorderProps,
    ColorProps,
    FlexboxProps,
    GridProps,
    LayoutProps,
    PositionProps,
    ShadowProps,
    SpaceProps,
    TypographyProps {
  backDrop?: any;
  backdropFilter?: any;
  visibility?: any;
  transition?: any;
  transform?: any;
  cursor?: "pointer" | "reverse";
  whiteSpace?: "nowrap" | "pre" | "pre-line" | "pre-wrap" | "reverse" | "normal";
  visible?:"visible" |"hidden";
  backgroundClip?: string;
  WebkitBackgroundClip?: string;
  textOverflow?: any;
  filter?: any;
  columnGap?: any;
  rowGap?: any;
  ref?: any;
  uppercase?: boolean;
  boxSizing?: any;
  mixBlendMode?: any;
  transformStyle?: any;
  textColor?: any;
  textTransform?: any;
  aspectRatio?: any;
  clipPath?: any;
  outline?: string;
  objectFit?: "contain" | "cover" | "fill" | "revert" | "scale-down" | "unset" | "initial";
}

const transform = system({ transform: true });
const boxSizing = system({ boxSizing: true });
const mixBlendMode = system({ mixBlendMode: true });
const transformStyle = system({ transformStyle: true });
const aspectRatio = system({ aspectRatio: true });
const clipPath = system({ clipPath: true });
const textColor = system({ textColor: { property: "color", scale: "colors" } });
const rowGap = system({ rowGap: true });
const columnGap = system({ columnGap: true });
const backdropFilter = system({ backdropFilter: true });
const backDrop = system({ backdropFilter: true });
const transition = system({ transition: true });
const filter = system({ filter: true });
const visibility = system({ visibility: true });
const textOverflow = system({ textOverflow: true });
const whiteSpace = system({ whiteSpace: true });
const backgroundClip = system({ backgroundClip: true });
const WebkitBackgroundClip = system({ WebkitBackgroundClip: true });
const cursor = system({ cursor: true });
const textTransform = system({ textTransform: true });
const outline = system({ outline: true });

// allCompose
export const allCompose = compose(
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  transform,
  boxSizing,
  mixBlendMode,
  transformStyle,
  textColor,
  aspectRatio,
  clipPath,
  columnGap,
  rowGap,
  backDrop,
  backdropFilter,
  transition,
  filter,
  visibility,
  textOverflow,
  whiteSpace,
  backgroundClip,
  WebkitBackgroundClip,
  cursor,
  textTransform,
  outline
);

// Box
export const Box = styled.div<AllProps>`
  ${allCompose}
`;
Box.defaultProps = {
  boxSizing: "border-box",
};

// Input
interface InputProps extends AllProps {
  outline?: string;
}
export const Input = styled.input<InputProps>`
  ${allCompose}
  &::-webkit-inner-spin-button {
    display: none;
  }
`;
Input.defaultProps = {
  outline: "none",
  boxSizing: "border-box",
};
export const TextArea = styled.textarea<InputProps>`
  ${allCompose}
  &::-webkit-inner-spin-button {
    display: none;
  }
`;
TextArea.defaultProps = {
  outline: "none",
  boxSizing: "border-box",
};

// Image
export const Image = styled.img<AllProps>`
  ${allCompose}
`;

// Link
interface LinkProps extends AllProps {
  hoverBg?: string;
  hoverColor?: string;
  hoverUL?: string;
}
export const Link = styled.a<LinkProps>`
  ${allCompose}
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  display: inline-flex;
  &:hover {
    background: ${(p) => (p.hoverBg ? p.hoverBg : "reverse")};
    color: ${(p) => (p.hoverColor ? p.hoverColor : "reverse")};
    text-decoration: ${(p) => (p.hoverUL ? p.hoverUL : "reverse")};
  }
`;
Link.defaultProps = {
  boxSizing: "border-box",
};
