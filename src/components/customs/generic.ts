import { motion } from 'framer-motion';
import styled, { createGlobalStyle } from 'styled-components';
import type * as localTypes from '../../types/index.js';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
  }

  body {
    background: ${(props): string => props.theme.background.default};
    font-family: "Verdana", serif;
  }
`;

export const App = styled(motion.div)<localTypes.IDefaultChildren>`
  background: ${(props): string => props.theme.background.default};
  color: ${(props): string => props.theme.colors.default};
  transition: ${(props): string => props.theme.transition.slow};
  width: 100%;
`;

export interface INavbarProps extends localTypes.IDefaultChildren {
  $active?: boolean;
}
