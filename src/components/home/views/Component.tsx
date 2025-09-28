import React, { useEffect } from 'react';
import * as hooks from '../../../redux/index.js';
import { useSelector } from 'react-redux';
import UnauthorizedHome from './unauthorized/Component.js';
import AuthorizedHome from './authorized/Component.js';

const Home = (): React.JSX.Element => {
  const { id } = useSelector(hooks.accountState);

    useEffect(() => {
    console.log("Id ?", id)
    }, [id])

  return id ? <AuthorizedHome id={id} /> : <UnauthorizedHome/>
};

export default Home;
