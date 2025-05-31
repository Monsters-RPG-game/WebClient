import { styled } from '@mui/material';
import { motion } from 'framer-motion';
import { NavButton } from '../../generic/themed/index.js';
import type * as types from '../../../types/index.js';

export const Section = styled(motion.div)<types.ISectionProps>`
  display: flex;
  flex-direction: ${(props): string => props.$direction ?? 'column'};
  justify-content: ${(props): string => props.$justify ?? 'flex-start'};
  align-items: ${(props): string => props.$align ?? 'center'};
  flex-wrap: ${(props): string => props.$wrap ?? 'wrap'};
  width: ${(props): string => (props.$full ? '100%' : 'fit-content')};
  overflow-x: auto;
  height: ${(props): string => (props.$fill ? '100%' : 'auto')};
  margin: ${(props): number => (props.$centered ? 0 : 1)}rem;
  padding: ${(props): number => (props.$centered ? 0 : 1)}rem;

  &::-webkit-scrollbar {
    width: 15px;
    border-radius: 50px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 50px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Body = styled(motion.div)<types.IDefaultChildren>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 140px;
  height: 100%;
  transition: 0.75s all ease-in-out;
`;

export const PanelButton = styled(NavButton)<types.ISettingsButtons>`
  font-size: 1.8rem;
  align-self: flex-start;

  &:after {
    position: fixed;
    content: '•';
    color: ${(props): string => (props.$active ? props.theme.palette.text.primary : 'transparent')};
    display: inline-block;
    font-weight: bolder;
    text-align: center;
    margin-left: 0.5em;
    cursor: ${(props): string => (props.$active ? 'pointer' : 'default')};
    transition: 0.75s all ease-in-out;
  }

  &:hover {
    color: ${(props): string => props.theme.palette.text.primary};
  }
`;

export const InnerSection = styled(Section)<types.ISectionProps>`
  box-shadow: ${(props): string => `1px 0 3px ${props.theme.palette.grey[100]}`};
  border-radius: 10px;

  header {
    width: fit-content;
  }
`;
