import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import * as hooks from '../../../redux/index.js';
import * as animation from '../../../animations/index.js';
import { DisableNotifications, Notification } from '../themed/index.js';
import { useMainDispatch } from '../../../redux/hooks.js';
import type { INotification } from '../../../redux/types/index.js';
import { ENotificationType } from '../../../enums/index.js';

const renderNotifications = (
  messages: INotification[],
): React.JSX.Element[] | React.JSX.Element => {
  let i = 0;
  return messages.map((n) => {
    i++;

    switch (n.type) {
      case ENotificationType.Default:
      default:
        return (
          <Notification
            key={`${n.message}-${i}`}
            $nth={i - 1}
            data-cy="notification-default-body"
            variants={animation.slowSlideDown}
            initial="init"
            animate="visible"
            exit="exit"
          >
            <h3>{n.message}</h3>
          </Notification>
        );
    }
  });
};

const Notifications = (): React.JSX.Element => {
  const dispatch = useMainDispatch();
  const { messages } = useSelector(hooks.notificationsState);
  const [notifications, setNotifications] = useState<INotification[]>([]);

  useEffect(() => {
    if (messages.length === 0) return;
    setNotifications([...notifications as INotification[], messages[0]!]);
    dispatch(hooks.disableNotification());
  }, [dispatch, messages, notifications]);

  return (
    <AnimatePresence mode="wait">
      {notifications.length > 0 ? (
        <>
          {renderNotifications(notifications)}
          <DisableNotifications
            variants={animation.slowSlideDown}
            initial="init"
            animate="visible"
            exit="exit"
            data-cy="notification-button-disable"
            onClick={(): void => setNotifications([])}
          >
            <i className="icon-cancel" />
          </DisableNotifications>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default Notifications;
