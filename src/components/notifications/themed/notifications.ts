import { styled } from '@mui/material';
import { motion } from 'framer-motion';
import { ExitButton } from '../../customs/index.js';
import type * as types from '../../../types/index.js';

export const Notification = styled(motion.div)<types.INotificationProps>`
  position: fixed;
  top: ${(props): number => props.$nth * 60 + 70}px;
  right: 20px;
  min-height: 50px;
  height: fit-content;
  min-width: 250px;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  border: 1px solid ${(props): string => props.theme.palette.text.primary};
  background: ${(props): string => props.theme.palette.background.default};
  box-shadow: ${(props): string => `1px 1px 1px ${props.theme.palette.text.primary}`};
  color: ${(props): string => props.theme.palette.text.primary};
  z-index: 9;
`;

export const DisableNotifications = styled(ExitButton)<types.IDefaultChildren>`
  right: 80px;
  left: auto;

  h2 {
    font-size: 1.6em;
    font-weight: 200;
  }
`;

export const UpdateNotification = styled(Notification)<types.INotificationProps>`
  &:hover {
    cursor: pointer;
  }
`;
