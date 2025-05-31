import { Route, Routes, useLocation } from 'react-router-dom';
import * as hooks from './redux/index.js';
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Components from './components/index.js';
import { useSelector } from 'react-redux';


const SharedRoutes = () => (
  <>
    <Route path="/login" element={<Components.unauthorized.Login />} />
    <Route path="/about" element={<Components.About />} />
    <Route path="*" element={<Components.FourOhFour />} />
  </>
);

const Router = (): React.JSX.Element => {
  const location = useLocation();
  const { id } = useSelector(hooks.accountState);

    return id ? (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Components.Home />} />
        {SharedRoutes()}
      </Routes>
    </AnimatePresence>
  ) : (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Components.unauthorized.NotLogged />} />
        <Route path="/logout" element={<Components.unauthorized.Logout />} />
        <Route path="/register" element={<Components.unauthorized.Register />} />
        {SharedRoutes()}
      </Routes>
    </AnimatePresence>
  )
};

export default Router;
