import React, { useState, useEffect } from 'react';
import * as animation from '../../../animations'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'
import { Button } from '@mui/material';

const Login: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const feedback = params.get('feedback');

    if (feedback === 'success') setMessage('logged in');
    if (feedback === 'fail') setMessage('Failed to log in');
  });

  return (
    <motion.div variants={animation.slideRight} initial="init" animate="visible" exit="exit">
        <header>{message}</header>
        <Button onClick={() => navigate('/')}>Go home</Button>
    </motion.div>
  );
};

export default Login;
