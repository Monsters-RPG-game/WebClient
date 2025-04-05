import type React from 'react';
import { ENotificationType } from '../../enums';
import * as hooks from '../../redux';
import type { MainDispatch } from '../../store/types';

// eslint-disable-next-line import/prefer-default-export
export const toggleNotification = (
  e: React.FormEvent<HTMLFormElement>,
  message: string,
  dispatch: MainDispatch,
): void => {
  e.preventDefault();
  dispatch(hooks.addNotification({ message, type: ENotificationType.Default }));
};
