import React, { useEffect } from 'react';
import Controller from '../controller.js';

const Websocket = (): React.JSX.Element => {

  useEffect(() => {
    Controller.getInstance();
  }, []);

  return <React.Fragment />
};

export default Websocket;
