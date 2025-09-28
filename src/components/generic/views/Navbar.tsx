import React from 'react';
import { useSelector } from 'react-redux';
import * as hooks from '../../../redux/index.js';
import toggleNav from '../utils.js';
import * as themed from '../themed/index.js';
import { NavBody, NavButton, NavContainer, NavIcons } from '../themed/index.js';
import * as enums from '../../../enums/index.js';
import * as animation from '../../../animations/index.js';
import { Link, Title } from '../../customs/index.js';
import { sendToLogoutPage } from '../controller.js';

const AuthorizedNavbar = ({ setAppActive, setSettings }: { setSettings: React.Dispatch<React.SetStateAction<boolean>>; setAppActive: React.Dispatch<React.SetStateAction<enums.EActiveAppStates>> }): React.JSX.Element => {
  return (
    <>
      <NavIcons>
        <NavButton onClick={() => setAppActive(enums.EActiveAppStates.Inactive)} data-cy="nav-button-users">
          <Link to="/users" replace>
            <h4>Users</h4>
          </Link>
        </NavButton>

        <NavButton onClick={() => setAppActive(enums.EActiveAppStates.Inactive)} data-cy="nav-button-messages">
          <Link to="/messages" replace>
            <h4>Messages</h4>
          </Link>
        </NavButton>
      </NavIcons>

      <NavIcons>
        <NavButton onClick={() => sendToLogoutPage()} data-cy="nav-button-logout">
          <h4>Logout</h4>
        </NavButton>
        { process.env.NODE_ENV !== 'production' || process.env.DEBUG_PROD === 'true' ? (
          <NavButton data-cy="nav-button-debug">
            <Link to="/debug">
              <i className="icon-bug navIcon" />
            </Link>
          </NavButton>
        ) : null }
        <NavButton data-cy="nav-button-settings" onClick={(): void => setSettings(true)}>
          <i className="icon-cog-outline navIcon" />
        </NavButton>
      </NavIcons>
    </>
  );
}

const UnauthorizedNavbar = ({ setAppActive }: { setSettings: React.Dispatch<React.SetStateAction<boolean>>;   setAppActive: React.Dispatch<React.SetStateAction<enums.EActiveAppStates>>; }): React.JSX.Element => {
  return (
    <>
      <NavIcons>
        <NavButton onClick={() => setAppActive(enums.EActiveAppStates.Inactive)} data-cy="nav-button-users">
          <Link to="/account" replace>
            <h4>Account</h4>
          </Link>
        </NavButton>
      </NavIcons>
      <NavIcons>
        { process.env.NODE_ENV !== 'production' || process.env.DEBUG_PROD === 'true' ? (
          <NavButton data-cy="nav-button-debug">
            <Link to="/debug">
              <i className="icon-bug navIcon" />
            </Link>
          </NavButton>
        ) : null }
      </NavIcons>
    </>
  );
};

const Navbar = ({ setAppActive, appActive, setSettings }: {
  setAppActive: React.Dispatch<React.SetStateAction<enums.EActiveAppStates>>;
  appActive: enums.EActiveAppStates;
  setSettings: React.Dispatch<React.SetStateAction<boolean>>;
}): React.JSX.Element => {
  const { id } = useSelector(hooks.accountState);

  return (
    <>
      <themed.NavSwitch
        $active={appActive === enums.EActiveAppStates.Inactive}
        data-cy="navSwitch"
        onClick={(): void => toggleNav(setAppActive, appActive)}
      >
        <i className="icon-left-open-outline navIcon" />
      </themed.NavSwitch>
      <NavContainer id="navbar" variants={animation.slowSlideRight} initial="init" animate="visible" exit="exit">
        <NavBody>
          <NavIcons>
            <NavButton onClick={() => setAppActive(enums.EActiveAppStates.Inactive)} data-cy="nav-button-home">
              <Link to="/" replace>
                <Title>Monsters</Title>
              </Link>
            </NavButton>
          </NavIcons>
          { id ? <AuthorizedNavbar setAppActive={setAppActive} setSettings={setSettings} /> : <UnauthorizedNavbar setAppActive={setAppActive} setSettings={setSettings} /> }
        </NavBody>
      </NavContainer>
    </>
  );
};

export default Navbar;
