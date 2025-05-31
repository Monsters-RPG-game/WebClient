import React from 'react';
import * as animation from '../../../animations/index.js';
import { Header, Container, ContainerBody } from '../../customs/index.js';
import { Button, Link as ButtonLink } from '@mui/material';

const FourOhFour = (): React.JSX.Element => {
  return (
    <Container variants={animation.slowSlideRight} initial="init" animate="visible" exit="exit">
      <ContainerBody>
        <Header>Four oh four</Header>
        <Button data-cy="404-button-home" type="button" className="mainButton">
          <ButtonLink href="/">
            Take me home
          </ButtonLink>
        </Button>
      </ContainerBody>
    </Container>
  );
};

export default FourOhFour;
