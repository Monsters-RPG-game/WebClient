import Home from './home/views/Component.js';
import FourOhFour from './generic/views/FourOhFour.js';
import Navbar from './generic/views/Navbar.js';
import Settings from './settings/views/Component.js';
import NotLogged from './unauthorized/views/Component.js';
import Login from './unauthorized/views/Login.js';
import Logout from './unauthorized/views/Logout.js'
import Register from './unauthorized/views/Register.js';
import Users from './users/views/Component.js'

const Components = {
  FourOhFour,
  Home,
  Navbar,
  Settings,
  NotLogged,
  Login,
  Register,
  Logout,
  Users
};

export default Components;
