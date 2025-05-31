import React from 'react';
import * as animation from '../../../animations/index.js';
import * as icons from '../../customs/icons.js';
import { FullPageContainer, Header } from '../../customs/index.js';

const Loading = ({ finished }: { finished: boolean }): React.JSX.Element => {
  return (
    <FullPageContainer variants={animation.slowSlideRight} initial="init" animate="visible" exit="exit">
        {finished ? (
          <Header>Loaded</Header>
        ) : (
          <>
            <Header>Loading</Header>
            <icons.LoadingPill />
          </>
        )}
    </FullPageContainer>
  );
};

export default Loading;
