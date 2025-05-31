import React, { useState } from 'react';
import * as animation from '../../../animations/index.js';
import { ExitButton, Header, Form } from '../../customs/index.js';
import { Button } from '@mui/material';
import { SendContainer, SendContainerBody } from '../styled/send.js';
import * as hooks from '../../../redux/index.js'
import { ENotificationType } from '../../../enums/notifications.js';
import { useMainDispatch } from '../../../redux/hooks.js';
import { sendMessage as send } from '../controller.js'
import { ISendMessageForm } from '../../../types/forms.js';
import { MainDispatch } from 'src/store/types.js';

async function sendMessage(e: React.FormEvent<ISendMessageForm>, disable: () => void, dispatch: MainDispatch): Promise<void> {
        e.preventDefault()

        const target = e.target as ISendMessageForm

        const body = target.body.value
        const receiver = target.receiver.value

        await send(receiver, body)

        dispatch(hooks.addNotification({ type: ENotificationType.Default, message: 'Message sent' }))
        disable()
}

const SendMessage = ({disable}: {disable: () => void}): React.JSX.Element => {
    const dispatch = useMainDispatch()
    const [error, setError] = useState<string | undefined>(undefined)

  return (
    <SendContainer variants={animation.slideRight} initial="init" animate="visible" exit="exit">
    <ExitButton onClick={(): void => disable()} data-cy="settings-button-exit">
        <i className="icon-left-open-outline navIcon" />
      </ExitButton>
      <SendContainerBody>
        <Header>Send new message</Header>
        <Form onSubmit={(e) => sendMessage(e as React.FormEvent<ISendMessageForm>, disable, dispatch).catch((err) => {
            setError(err.message)
        })}>
            <label>Receiver</label>
            <input type='string' placeholder='Receiver' id='receiver' />

            <label>Message</label>
            <input type='string' placeholder='Body' id='body' />

            <Button type='submit'>Send</Button>
        </Form>
        {error ? <p>{error}</p> : null} // To change
      </SendContainerBody>
    </SendContainer>
  );
};

export default SendMessage
