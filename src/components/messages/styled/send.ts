import styled from 'styled-components';
import { ContainerBody, OverlayContainer } from '../../customs/index.js';
import type * as localTypes from '../../../types/theme.js';

export const SendContainer = styled(OverlayContainer)<localTypes.IDefaultChildren>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.7);
`;

export const SendContainerBody = styled(ContainerBody)<localTypes.IDefaultChildren>`
  width: 500px;
  height: 500px;
  border: 1px solid #ddd;
  box-shadow: ${(props): string => `1px 0 1px ${props.theme.colors.ohOrange}`};
`;
