import React from 'react';
import * as animation from '../../../animations/index.js';
import { Container, ContainerBody, Header } from '../../customs/index.js';
import * as icons from '../../customs/icons.js';

const Loading = ({ finished }: { finished: boolean }): React.JSX.Element => {
  return (
    <Container variants={animation.slowSlideRight} initial="init" animate="visible" exit="exit">
      <ContainerBody>
        {finished ? (
          <Header>Loaded</Header>
        ) : (
          <>
            <Header>Loading</Header>
            <icons.LoadingPill />
          </>
        )}
      </ContainerBody>
    </Container>
  );
};

export default Loading;
