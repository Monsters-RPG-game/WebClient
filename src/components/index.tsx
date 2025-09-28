import Home from './home/views/Component.js';
import FourOhFour from './generic/views/FourOhFour.js';
import Navbar from './generic/views/Navbar.js';
import Settings from './settings/views/Component.js';
import NotAuthorized from './unauthorized/views/Component.js';
import Login from './unauthorized/views/Login.js';
import Logout from './unauthorized/views/Logout.js'
import Register from './unauthorized/views/Register.js';
import Messages from './messages/views/Component.js'
import Users from './users/views/Component.js'
import Debug from './debug/views/Component.js'
import Inbox from './messages/views/Inbox.js'
import Websocket from './websocket/views/Component.js';

const Components = {
  FourOhFour,
  Home,
  Debug,
  Navbar,
  Settings,
  NotAuthorized,
  Login,
  Register,
  Logout,
  Users,
  Messages,
  Inbox,
  Websocket
};

export default Components;
