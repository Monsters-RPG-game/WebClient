import React, { useEffect } from 'react';
import Controller from '../controller.js';
import { useMainDispatch } from '../../../redux/hooks.js';

const Websocket = (): React.JSX.Element => {
  const dispatch = useMainDispatch()

  useEffect(() => {
    if(!dispatch) return
    Controller.getInstance(dispatch);
  }, [dispatch]);

  return <React.Fragment />
};

export default Websocket;
