import * as animation from '../../../../animations/index.js';
import { Container, ContainerBody } from '../../../customs/index.js';
import React from 'react';

const AuthorizedHome = ({ id }: { id: string }): React.JSX.Element => {
  return (
    <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
      <ContainerBody $textAlign="center">
        <h2>Home page</h2>
        <h2>Hello {id}</h2>
      </ContainerBody>
    </Container>
  );
}

export default AuthorizedHome
