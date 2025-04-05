import React from 'react';
import * as renderer from './Renderer';
import { Container, ContainerBody, Header, PanelHeader } from '../../customs';
import * as animation from '../../../animations';
import { Section } from '../../settings/themed';

const Debug: React.FC = () => {
  return (
    <Container variants={animation.slowSlideRight} initial="init" animate="visible" exit="exit">
      <ContainerBody $justify="flex-start">
        <PanelHeader data-cy="debug-header-main">Debug</PanelHeader>

        <Header>Notifications</Header>
        <Section $direction="row">
          <renderer.ToggleNotification />
        </Section>
      </ContainerBody>
    </Container>
  );
};

export default Debug;
