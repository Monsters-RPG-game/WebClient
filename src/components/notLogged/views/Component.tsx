import React from 'react';
import * as animation from '../../../animations/index.js';
import { Container, ContainerBody } from '../../customs/index.js';

const NotLogged = (): React.JSX.Element => {
    return (
    <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
      <ContainerBody>
        <h2>Home page</h2>
        <h2>Home page for not logged in user</h2>
      </ContainerBody>
    </Container>
  );;
};

export default NotLogged
