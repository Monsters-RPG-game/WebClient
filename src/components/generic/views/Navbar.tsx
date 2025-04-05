import React from 'react';
import toggleNav from '../utils.js';
import * as themed from '../themed/index.js';
import { NavBody, NavButton, NavContainer, NavIcons } from '../themed/index.js';
import * as enums from '../../../enums/index.js';
import * as animation from '../../../animations/index.js';
import { Link } from '../../customs/index.js';
import { sendToLogoutPage } from '../controller.js';

const Navbar = ({ setAppActive, appActive, setSettings }: {
  setAppActive: React.Dispatch<React.SetStateAction<enums.EActiveAppStates>>;
  appActive: enums.EActiveAppStates;
  setSettings: React.Dispatch<React.SetStateAction<boolean>>;
}): React.JSX.Element => {
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
            <NavButton data-cy="nav-button-home">
              <Link to="/" replace>
                <h4>Home</h4>
              </Link>
            </NavButton>

            <NavButton data-cy="nav-button-route">
              <Link to="/route" replace>
                <h4>Route</h4>
              </Link>
            </NavButton>
          </NavIcons>

          <NavIcons>
            <NavButton onClick={() => sendToLogoutPage()} data-cy="nav-button-logout">
                <h4>Logout</h4>
            </NavButton>
            <NavButton data-cy="nav-button-settings" onClick={(): void => setSettings(true)}>
              <i className="icon-cog-outline navIcon" />
            </NavButton>
          </NavIcons>
        </NavBody>
      </NavContainer>
    </>
  );
};

export default Navbar;
