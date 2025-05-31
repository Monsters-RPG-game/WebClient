import { styled } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Header = styled(motion.header)`
  width: 50%;
  text-align: center;
  font-size: 2rem;
  font-weight: lighter;
  letter-spacing: 0.9px;
  padding: 1rem;
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  text-align: left;
  color: ${(props): string => props.theme.palette.text.primary};
  transition: 0.75s all ease-in-out;
`;

export const InvisibleLink = styled(ButtonLink)`
  &:hover {
    color: ${(props): string => props.theme.palette.text.secondary};
  }
`;
