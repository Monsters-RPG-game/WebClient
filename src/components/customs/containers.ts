import { styled, Container as MuiContainer } from '@mui/material';
import { motion } from 'framer-motion';
import type * as types from './types';

export const CenteredContainer = styled(motion(MuiContainer))`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const FullPageContainer = styled(motion(MuiContainer))<types.IContainerProps>`
  display: flex;
  flex-direction: ${(props): string => props.$direction ?? 'column'};
  justify-content: ${(props): string => props.$justify ?? 'center'};
  align-items: ${(props): string => props.$align ?? 'center'};
  flex-wrap: ${(props): string => props.$wrap ?? 'wrap'};

  width: 100%;
  height: 100vh;
`;
