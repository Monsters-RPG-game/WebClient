import React, { useState } from 'react';
import * as animation from '../../../animations/index.js';
import { Button, Container, ContainerBody } from '../../customs/index.js';
import { AnimatePresence } from 'framer-motion';
import SendMessage from './Send.js';

const ModalsController = ({ showModal, setShowModal }: {
  showModal: string | undefined;
  setShowModal: React.Dispatch<React.SetStateAction<string | undefined>>
}): React.JSX.Element => {
  return (
    <AnimatePresence mode="wait">
      {showModal === 'send' ? <SendMessage disable={() => setShowModal(undefined)}/> : null}
    </AnimatePresence>
  );
};

const Messages = (): React.JSX.Element => {
    const [showModal, setShowModal] = useState<string | undefined>(undefined)

  return <React.Fragment>
        <ModalsController showModal={showModal} setShowModal={setShowModal} />
        <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
            <ContainerBody>
                <h2>Messages page</h2>
                <Button onClick={() => setShowModal('send')}>Send new message</Button>
            </ContainerBody>
        </Container>
    </React.Fragment>
};

export default Messages;
