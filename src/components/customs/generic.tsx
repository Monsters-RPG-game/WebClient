import { motion } from 'framer-motion';
import { styled } from '@mui/material';
import * as enums from '../../enums/index.js';
import type * as localTypes from '../../types/index.js';

export const App = styled(motion.div)<localTypes.IDefaultChildren>`
  background: ${(props): string => props.theme.palette.background.default};
  color: ${(props): string => props.theme.palette.text.primary};
  transition: 0.75s all ease-in-out;
  width: 100%;
  padding-left: ${(props): number => {
    switch (props.theme.appState) {
      case enums.EActiveAppStates.Active:
        return 150;
      case enums.EActiveAppStates.SemiActive:
        return 75;
      case enums.EActiveAppStates.Inactive:
      default:
        return 0;
    }
  }}px;
`;

export interface INavbarProps extends localTypes.IDefaultChildren {
  $active?: boolean;
}
