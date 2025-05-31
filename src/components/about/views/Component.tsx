import React from 'react';
import { motion } from 'framer-motion'
import * as animation from '../../../animations/index.js';
import { Header } from '../../customs/text.js';

const About = (): React.JSX.Element => {
  return (
    <motion.div variants={animation.slideRight} initial="init" animate="visible" exit="exit">
        <Header>About page</Header>
    </motion.div>
  );
};

export default About;
