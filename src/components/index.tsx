import Home from './home/views/Component.js';
import FourOhFour from './generic/views/FourOhFour.js';
import NotLogged from './unauthorized/views/Component.js';
import Login from './unauthorized/views/Login.js';
import Logout from './unauthorized/views/Logout.js'
import Register from './unauthorized/views/Register.js';
import Websocket from './websocket/views/Component.js';
import About from './about/views/Component.js'

const Components = {
  About,
  FourOhFour,
  Home,
  Websocket,

  unauthorized: {
    Login,
    Logout,
    NotLogged,
    Register
  }
};

export default Components;
