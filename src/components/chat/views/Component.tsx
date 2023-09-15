import React from 'react';
import * as animation from '../../../animation';
import { Container, ContainerBody } from '../../customs';

const Chat: React.FC = () => {
  return (
    <Container variants={animation.slowSlideRight} initial="init" animate="visible" exit="exit">
      <ContainerBody>Game chat</ContainerBody>
    </Container>
  );
};

export default Chat;
