import React, { useEffect, useState } from 'react';
import * as animation from '../../../animations/index.js';
import { Button, Container, ContainerBody } from '../../customs/index.js';
import { getChatDetails, getMessages } from '../controller.js';
import { IDetails, IMessage } from 'src/types/messages.js';
import { useSelector } from 'react-redux';
import * as hooks from '../../../redux/index.js'
import { formatDate } from '../../../utils/index.js';
import { MessageSenderBody, MessageReceiverBody } from '../styled/inbox.js';

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

const Inbox = (): React.JSX.Element => {
    const { id } = useSelector(hooks.accountState);
    const [messages, setMessages] = useState<Record<string, IMessage>>({});
    const [target, setTarget] = useState<{ user: string, id: string } | undefined>(undefined);
    const [ details, setDetails ] = useState<IDetails[]>([])

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
                return <Button key={k} onClick={() => setTarget({user: v.sender === id ? v.sender : v.receiver, id: k})}>{v.receiver === id ? v.sender : v.receiver}</Button>
            }) : details.length > 0 ? renderMessages(details, id!) : 'Loading messages...'}
        </ContainerBody>
    </Container>
};

export default Inbox;
