import React from 'react';
import * as animation from '../../../animations/index.js';
import { Button, Container, ContainerBody, Header } from '../../customs/index.js';
import { sendToLoginPage, sendToRegisterPage } from '../controllers/index.js';

const NotLogged = (): React.JSX.Element => {
    return (
      <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
        <ContainerBody>
          <Header>Monsters</Header>
          <h2>You are not logged in</h2>
          <Button onClick={() => sendToRegisterPage()}>Register</Button>
          <Button onClick={() => sendToLoginPage()}>Log in</Button>
          <h2>This app is work in progress...</h2>
        </ContainerBody>
      </Container>
  );
};

export default NotLogged
