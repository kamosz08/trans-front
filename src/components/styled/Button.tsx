import styled from '@emotion/styled';
import {
  space, layout, typography, color, SpaceProps, LayoutProps, TypographyProps, ColorProps,
} from 'styled-system';

export const Button = styled.button<SpaceProps & LayoutProps & TypographyProps & ColorProps>`
  padding: 8px 16px;
  font-size: 1.2rem;
  color: #fbfbfbf2 !important;
  cursor: pointer;
  outline: none;
  border-radius: 4px;

  ${space}
  ${layout}
  ${typography}
  ${color}
`;
