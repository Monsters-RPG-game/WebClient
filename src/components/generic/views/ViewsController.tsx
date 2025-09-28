import React, { useEffect, useState } from 'react';
import * as hooks from '../../../redux/index.js';
import type { DefaultTheme } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import type * as enums from '../../../enums/index.js';
import { useMainDispatch } from '../../../redux/hooks.js';
import Components from '../../index.js';
import Router from '../../../Router.js';
import { App as MainApp } from '../../customs/index.js';
import Notifications from '../../notifications/views/Component.js';
import Loading from './Loading';
import { loginUser } from '../controller.js'
import { useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';

const preLogin = (
    dispatch: Dispatch,
    setFinished: React.Dispatch<React.SetStateAction<boolean>>,
    setReady: React.Dispatch<React.SetStateAction<boolean>>
) => {
    loginUser().then((data) => {
        dispatch(hooks.logIn({ id: data }));
    }).catch((_err) => {
    }).finally(() => {
    // Simple way to show loading screen to emulate loading.
    setTimeout(() => {
        setFinished(true);
    }, 2000)
    setTimeout(() => {
      setReady(true);
      }, 3000)
    })
}

const StaticHandlers = ({ setTheme, settings, setSettings }: {
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
  setSettings: React.Dispatch<React.SetStateAction<boolean>>;
  settings: boolean;
}): React.JSX.Element => {
  return (
    <AnimatePresence mode="wait">
      {settings ? <Components.Settings setTheme={setTheme} disablePanel={(): void => setSettings(false)} /> : null}
    </AnimatePresence>
  );
};

const ViewsController = ({ setAppActive, appActive, setTheme }: {
  setAppActive: React.Dispatch<React.SetStateAction<enums.EActiveAppStates>>;
  appActive: enums.EActiveAppStates;
  setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
}): React.JSX.Element => {
  const dispatch = useMainDispatch();
  const { id } = useSelector(hooks.accountState);
  const [settings, setSettings] = useState<boolean>(false);
  const [ready, setReady] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);

  useEffect(() => {
    preLogin(dispatch, setFinished, setReady)
  }, [dispatch]);

  return !ready ? (
    <Loading finished={finished} />
  ) : id ? (
    <>
      <Notifications />
      <Components.Websocket />
      <MainApp id="app">
        <StaticHandlers setTheme={setTheme} settings={settings} setSettings={setSettings} />
        <Components.Navbar setAppActive={setAppActive} appActive={appActive} setSettings={setSettings} />
        <Router />
      </MainApp>
    </>
  ) : (
      <MainApp id="app">
        <Components.Navbar setAppActive={setAppActive} appActive={appActive} setSettings={setSettings} />
        <Router />
      </MainApp>
  )
};

export default ViewsController;
