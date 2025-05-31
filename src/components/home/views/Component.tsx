import React from 'react';
import { motion } from 'framer-motion'
import * as hooks from '../../../redux/index.js';
import * as animation from '../../../animations/index.js';
import { useSelector } from 'react-redux';

const Home = (): React.JSX.Element => {
  const { id } = useSelector(hooks.accountState);

  return (
    <motion.div variants={animation.slideRight} initial="init" animate="visible" exit="exit">
        <h2>Home page</h2>
        <h2>Hello {id}</h2>
    </motion.div>
  );
};

export default Home;
