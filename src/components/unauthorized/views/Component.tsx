import React from 'react';
import * as animation from '../../../animations/index.js';
import { Button, Container, ContainerBody, H2Color, Span } from '../../customs/index.js';
import { sendToLoginPage, sendToRegisterPage } from '../controllers/index.js';
import theme from '../../customs/theme.js';

const NotAuthorized = (): React.JSX.Element => {
    return (
      <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
        <ContainerBody>
          <Span><H2Color $color={theme.colors.primaryDefault}>M</H2Color><H2Color>onsters</H2Color></Span>
          <h3>You are not logged in</h3>
          <Button onClick={() => sendToRegisterPage()}>Register</Button>
          <Button onClick={() => sendToLoginPage()}>Log in</Button>
        </ContainerBody>
      </Container>
  );
};

export default NotAuthorized
