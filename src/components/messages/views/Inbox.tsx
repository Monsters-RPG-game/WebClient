import React, { useEffect, useState } from 'react';
import { sendMessage as send } from '../controller.js'
import * as animation from '../../../animations/index.js';
import { Container, ContainerBody, Form } from '../../customs/index.js';
import { Button } from '@mui/material';
import { getChatDetails, getMessages } from '../controller.js';
import { IDetails, IMessage } from 'src/types/messages.js';
import { useSelector } from 'react-redux';
import * as hooks from '../../../redux/index.js'
import { formatDate } from '../../../utils/index.js';
import { MessageSenderBody, MessageReceiverBody } from '../styled/inbox.js';
import { ISendMessageForm } from '../../../types/forms.js';
import { MainDispatch } from '../../../store/types.js';
import { ENotificationType } from '../../../enums/notifications.js';
import { useMainDispatch } from '../../../redux/hooks.js';

const renderMessages = (messages: IDetails[], user: string) => {
    return messages.map(m => {
        return m.sender === user
            ? <MessageSenderBody key={m.date}>
                {m.message}
                {' - '}{formatDate(m.date)}
              </MessageSenderBody> :
              <MessageReceiverBody key={m.date}>
                {formatDate(m.date)}{' - '}
                {m.message}
              </MessageReceiverBody>
    })
}

async function sendMessage(e: React.FormEvent<ISendMessageForm>, receiver: string, dispatch: MainDispatch): Promise<void> {
        e.preventDefault()

        const target = e.target as ISendMessageForm

        const body = target.body.value

        await send(receiver, body)

        dispatch(hooks.addNotification({ type: ENotificationType.Default, message: 'Message sent' }))
}

const Inbox = (): React.JSX.Element => {
    const dispatch = useMainDispatch()
    const { id } = useSelector(hooks.accountState);
    const [messages, setMessages] = useState<Record<string, IMessage>>({});
    const [target, setTarget] = useState<{ user: string, id: string } | undefined>(undefined);
    const [ details, setDetails ] = useState<IDetails[]>([])
    const [error, setError] = useState<string | undefined>(undefined)

    useEffect(() => {
        getMessages().then((data) => {
            setMessages(data)
        }).catch(err => {
          console.log(err)
        })
    }, [])

    useEffect(() => {
        if(!target) {
            setDetails([])
            return
        }

        getChatDetails(target.id).then((data) => {
            setDetails(data)
        }).catch(err => {
          console.log(err)
        })
    }, [target])

    return <Container variants={animation.slideRight} initial="init" animate="visible" exit="exit">
        <ContainerBody>
            <h2>{target ? `Chat details with ${target.user}` : 'Inbox'}</h2>
            {!target ? Object.entries(messages).map(([k, v]) => {
                return <Button key={k} onClick={() => setTarget({user: v.sender === id ? v.receiver : v.sender, id: k})}>{v.receiver === id ? v.sender : v.receiver}</Button>
            }) : details.length > 0 ? renderMessages(details, id!) : 'Loading messages...'}
            {target ? <Form onSubmit={(e) => sendMessage(e as React.FormEvent<ISendMessageForm>, target.user, dispatch).catch((err) => {
                setError(err.message)
            })}>
            <label>Message</label>
            <input type='string' placeholder='Body' id='body' />

            <Button type='submit'>Send</Button>
        </Form> : <></> }
        {error ? <p>{error}</p> : null} // To fix
        </ContainerBody>
    </Container>
};

export default Inbox;
