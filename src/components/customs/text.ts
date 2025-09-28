import { motion } from 'framer-motion';
import styled from 'styled-components';
import type { IDefaultChildren, ITextColorProps } from '../../types';

export const Error = styled(motion.h3)<IDefaultChildren>`
  text-align: center;
  font-size: 1.1rem;
  font-weight: lighter;
  padding: 1rem;
  color: red;
`;

export const H2Color = styled(motion.h2)<ITextColorProps>`
  color: ${(props): string => props.$color ?? props.theme.colors.default};
  display: inline;
`;

export const Color = styled(motion.text)<ITextColorProps>`
  color: ${(props): string => props.$color ?? props.theme.colors.default};
  text-size: ${(props): string => props.$size ?? '1em'};
  display: inline;
`;

export const Title = styled(motion.h4)<IDefaultChildren>`
  color: ${(props): string => props.theme.colors.primaryLighter};
`;
