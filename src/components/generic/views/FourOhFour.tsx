import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as animation from '../../../animations/index.js';
import { Button } from '@mui/material';
import { Header, FullPageContainer } from '../../customs/index.js';

const FourOhFour = (): React.JSX.Element => {
  const navigate = useNavigate();

  return (
     <FullPageContainer variants={animation.slowSlideRight} initial="init" animate="visible" exit="exit">
        <Header>Four oh four</Header>
        <Button onClick={() => navigate('/')} data-cy="404-button-home" type="button" className="mainButton">
            Take me home
        </Button>
    </FullPageContainer>
  );
};

export default FourOhFour;
