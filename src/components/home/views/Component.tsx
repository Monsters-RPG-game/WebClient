import React from 'react';
import * as hooks from '../../../redux/index.js';
import * as animation from '../../../animations/index.js';
import { Container, ContainerBody } from '../../customs/index.js';
import { useSelector } from 'react-redux';

const Home = (): React.JSX.Element => {
  const { id } = useSelector(hooks.accountState);

  return (
    <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
      <ContainerBody>
        <h2>Home page</h2>
        <h2>User is logged in as {id}</h2>
      </ContainerBody>
    </Container>
  );
};

export default Home;
