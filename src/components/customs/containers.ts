import { styled } from '@mui/material';
import { motion } from 'framer-motion';
import type * as localTypes from '../../types/index.js';

/**
 * Container of elements used to cover space.
 */
export const Container = styled(motion.div)<localTypes.IDefaultChildren>`
  width: 100%;
  height: 100vh;
`;

/**
 * Container's body user to center elements inside.
 * @param props Additional props for inline-styling.
 * @returns Container inner element, which defines container body.
 */
export const ContainerBody = styled(Container)<localTypes.IContainerProps>`
  display: flex;
  flex-direction: ${(props): string => props.$direction ?? 'column'};
  justify-content: ${(props): string => props.$justify ?? 'center'};
  align-items: ${(props): string => props.$align ?? 'center'};
  flex-wrap: ${(props): string => props.$wrap ?? 'wrap'};
  overflow-y: ${(props): string => (props.$noScroll ? 'hidden' : 'auto')};
  overflow-x: hidden;
  background: ${(props): string => props.theme.palette.background.default};
  color: ${(props): string => props.theme.palette.text.primary};
  transition: 0.75s all ease-in-out;

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

/**
 * Container used as overlay.
 * @returns Styled overlay container.
 */
export const OverlayContainer = styled(Container)<localTypes.IDefaultChildren>`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
`;

export const Inline = styled(motion.span)<localTypes.IDefaultChildren>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  width: fit-content;

  * {
    margin: 5px;
  }
`;
