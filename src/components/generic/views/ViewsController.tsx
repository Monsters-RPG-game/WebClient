import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import * as hooks from '../../../redux/index.js';
import { AnimatePresence } from 'framer-motion';
import type * as enums from '../../../enums/index.js';
import { useMainDispatch } from '../../../redux/hooks.js';
import Components from '../../index.js';
import Router from '../../../Router.js';
import Loading from './Loading';
import { loginUser } from '../controller.js'
import { useSelector } from 'react-redux';
import NavBar from './Navbar.js';

const StaticHandlers = (_params: {
  setTheme: React.Dispatch<React.SetStateAction<enums.EThemes>>;
  setSettings: React.Dispatch<React.SetStateAction<boolean>>;
  settings: boolean;
  theme: enums.EThemes;
}): React.JSX.Element => {
  return (
    <AnimatePresence mode="wait">
    </AnimatePresence>
  );
};

const ViewsController = ({setTheme, theme }: {
  theme: enums.EThemes;
  setTheme: React.Dispatch<React.SetStateAction<enums.EThemes>>;
}): React.JSX.Element => {
  const dispatch = useMainDispatch();
  const { id } = useSelector(hooks.accountState);
  const [settings, setSettings] = useState<boolean>(false);
  const [ready, setReady] = useState<boolean>(false);
  const [finished, setFinished] = useState<boolean>(false);

  useEffect(() => {
    loginUser().then((data) => {
        dispatch(hooks.logIn({ id: data }));
    }).catch((_err) => {

    }).finally(() => {
    // Simple way to show loading screen to emulate loading. Remove later
    setTimeout(() => {
        setFinished(true);
    }, 2000)
    setTimeout(() => {
      setReady(true);
      }, 3000)
    })
  }, [dispatch]);

  return !ready ? (
    <Loading finished={finished} />
  ) : id ? (
    <>
      <Components.Websocket />
      <motion.div id="app">
        <NavBar/>
        <StaticHandlers setTheme={setTheme} theme={theme} settings={settings} setSettings={setSettings} />
        <Router />
      </motion.div>
    </>
  ) : (
    <>
        <NavBar/>
        <Router />
    </>
  )
};

export default ViewsController;
