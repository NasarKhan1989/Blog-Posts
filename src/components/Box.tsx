import styled from "styled-components/macro";
import {
  compose,
  space,
  layout,
  typography,
  color,
  flexbox,
  border,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  FlexboxProps,
  BorderProps
} from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

interface Props
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    ColorProps,
    FlexboxProps,
    BorderProps {
  dataAutomation?: string;
}

const Box = styled("div").withConfig({
  shouldForwardProp: prop => shouldForwardProp(prop)
})<Props>(compose(space, layout, typography, color, flexbox, border));

export default Box;
export type { Props };
