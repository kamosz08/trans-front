import styled from '@emotion/styled';
import {
  space, layout, typography, color, flexbox,
  SpaceProps, LayoutProps, TypographyProps, ColorProps, FlexboxProps,
} from 'styled-system';

export const Box = styled.div<SpaceProps & LayoutProps & TypographyProps & ColorProps & FlexboxProps>`
  ${space}
  ${layout}
  ${typography}
  ${color}
  ${flexbox}
`;
