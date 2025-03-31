import type { ENotificationType } from '../../enums/index.js';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface INotification {
  type: ENotificationType;
  message: string;
}

export interface INotificationsState {
  messages: INotification[];
}

export interface INotificationActionBody {
  message: string;
  type: ENotificationType;
}

export type INotificationAction = PayloadAction<INotificationActionBody>;
