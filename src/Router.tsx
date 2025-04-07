import { Route, Routes, useLocation } from 'react-router-dom';
import * as hooks from './redux/index.js';
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Components from './components/index.js';
import { useSelector } from 'react-redux';

const Router = (): React.JSX.Element => {
  const location = useLocation();
  const { id } = useSelector(hooks.accountState);

    return id ? (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Components.Home />} />
        <Route path="/users" element={<Components.Users />} />
        <Route path="/messages" element={<Components.Messages />} />
        <Route path="/inbox" element={<Components.Inbox />} />
        <Route path="/debug" element={<Components.Debug />} />
        <Route path="*" element={<Components.FourOhFour />} />
      </Routes>
    </AnimatePresence>
  ) : (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<Components.Login />} />
        <Route path="/logout" element={<Components.Logout />} />
        <Route path="/register" element={<Components.Register />} />
        <Route path="*" element={<Components.NotLogged />} />
      </Routes>
    </AnimatePresence>
  )
};

export default Router;
