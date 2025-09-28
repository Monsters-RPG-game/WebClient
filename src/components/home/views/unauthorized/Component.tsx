import * as animation from '../../../../animations/index.js';
import { Container, ContainerBody, H2Color, Color, Header, Link, Span } from '../../../customs/index.js';
import theme from '../../../customs/theme.js'
import React from 'react';

const UnauthorizedHome = (): React.JSX.Element => {
  return (
    <>
      <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
        <ContainerBody $textAlign="center">
          <Span><H2Color $color={theme.colors.primaryDefault}>M</H2Color><H2Color>onsters</H2Color></Span>
          <p>Open-source backend for strategy games</p>
          <p>( Work in progress )</p>
        </ContainerBody>
      </Container>
      <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
        <ContainerBody $textAlign="center">
          <Header>Create your game with <Color $color={theme.colors.primaryDefault}>us !</Color></Header>
          <Span $width={'100%'} $childrenMargin={'15px 0 0 0'}>
            <p>Monsters is a fully FOSS backend for creating strategy games written in Node.js.</p>
            <p>Our goal is to provide fully scallable, easy to modify and maintain applications.</p>
          </Span>
          <Span $width={'100%'} $childrenMargin={'10px 0 0 0'}>
            <p>You can find us here:</p>
          </Span>
          <Span $block={true} $width={'100%'} $childrenMargin={'10px 0 0 0'}>
            <Link $color={theme.colors.secondaryDarker} to="https://docs.kiszczyc.pl/" replace>
              <h3>- Documentation</h3>
            </Link>
            <Link $color={theme.colors.secondaryDarker} to="https://git.kiszczyc.pl/Monsters" replace>
              <h3>- Code</h3>
            </Link>
          </Span>
        </ContainerBody>
      </Container>
    </>
  )
}

export default UnauthorizedHome
