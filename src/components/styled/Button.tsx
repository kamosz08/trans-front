import styled from '@emotion/styled';
import {
  space, layout, typography, color, SpaceProps, LayoutProps, TypographyProps, ColorProps,
} from 'styled-system';
import { theme } from '../../theme';

export const Button = styled.button<SpaceProps & LayoutProps & TypographyProps & ColorProps>`
  padding: 8px 16px;
  font-size: 1.2rem;
  color: #fbfbfbf2 !important;
  background-color: ${theme.colors.pink};
  cursor: pointer;
  outline: none;
  border-radius: 4px;

  &:hover {
    background-color: ${theme.colors.pinkHover};
  }
  ${space}
  ${layout}
  ${typography}
  ${color}
`;
