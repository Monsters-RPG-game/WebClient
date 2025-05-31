import { styled } from '@mui/material';
import { motion } from 'framer-motion';
import type * as localTypes from '../../types/index.js';

export const Header = styled(motion.header)<localTypes.IDefaultChildren>`
  width: 50%;
  text-align: center;
  font-size: 2rem;
  font-weight: lighter;
  letter-spacing: 0.9px;
  padding: 1rem;
`;

export const Form = styled(motion.form)<localTypes.IDefaultChildren>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 1.2rem;
  width: fit-content;
  min-width: 350px;
  max-width: 500px;

  * {
    margin: 0.5rem;
  }
`;

export const PanelHeader = styled(Header)<localTypes.IHeaderProps>`
  width: ${(props): number => (props.$center ? 100 : 15)}%;
  font-size: 2.5rem;
  align-self: ${(props): string => (props.$center ? 'inherit' : 'flex-start')};
  margin: ${(props): string => (props.$center ? '0' : '0 1')}rem;
  border-bottom: 1px solid ${(props): string => props.theme.palette.text.primary};
`;
