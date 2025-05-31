import { styled } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as ReactLink } from 'react-router-dom';
import type * as localTypes from '../../types/index.js';

export const ExitButton = styled(motion.button)<localTypes.IDefaultChildren>`
  position: fixed;
  top: 0;
  left: 0;
  font-size: 2.3em;
  color: ${(props): string => props.theme.palette.text.primary};
  background: none;
  border: none;
  margin: 5px;
  padding: 0.25em 1em;
  cursor: pointer;
  z-index: 9;
`;

export const ButtonLink = styled(ReactLink)<localTypes.IDefaultChildren>`
  text-decoration: none;
  text-align: left;
  color: ${(props): string => props.theme.palette.text.primary};
  transition: 0.75s all ease-in-out;
`;

export const Link = styled(ButtonLink)<localTypes.IDefaultChildren>`
  &:hover {
    color: ${(props): string => props.theme.palette.text.secondary};
  }
`;
