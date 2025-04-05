import { motion } from 'framer-motion';
import styled from 'styled-components';
import type { IDefaultChildren } from '../../types';

// eslint-disable-next-line import/prefer-default-export
export const Error = styled(motion.h3)<IDefaultChildren>`
  text-align: center;
  font-size: 1.1rem;
  font-weight: lighter;
  padding: 1rem;
  color: red;
`;
