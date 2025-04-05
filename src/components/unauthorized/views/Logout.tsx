import React, { useState, useEffect } from 'react';
import * as animation from '../../../animations'
import { useNavigate } from 'react-router-dom';
import { Button } from '../../customs/buttons';
import { Container, ContainerBody, Header } from '../../customs';

const Logout: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const feedback = params.get('feedback');

    if (feedback === 'success') setMessage('Logged out');
  });

  return (
    <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
      <ContainerBody>
        <Header>{message}</Header>
        <Button onClick={() => navigate('/')}>Go home</Button>
      </ContainerBody>
    </Container>
  );
};

export default Logout;
