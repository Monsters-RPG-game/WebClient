import { motion } from 'framer-motion';
import styled from 'styled-components';
import type * as localTypes from '../../../types/theme.js';

export const MessageBody = styled(motion.div)<localTypes.IDefaultChildren>`
  width: 90%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 5px;
  margin: 5px;
  font-size: 1.1rem;
  font-weight: lighter;
`;

export const MessageSenderBody = styled(MessageBody)<localTypes.IDefaultChildren>`
  flex-direction: row;
  background: lightblue;
`;

export const MessageReceiverBody = styled(MessageBody)<localTypes.IDefaultChildren>`
  flex-direction: row-reverse;
  background: lightgreen;
`;
