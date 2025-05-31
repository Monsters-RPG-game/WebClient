import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as animation from '../../../animations/index.js';
import { Body, Section } from '../themed/index.js';
import * as enums from '../../../enums/index.js';
import { ContainerBody, ExitButton, OverlayContainer, PanelHeader } from '../../customs/index.js';
import * as renders from './Renderer.js';

const SettingsPanel = ({ setTarget, target }: {
  setTarget: React.Dispatch<React.SetStateAction<enums.ESettingsPanels>>;
  target: enums.ESettingsPanels;
}) => {
  return <Body>{renders.renderButton(setTarget, target)}</Body>;
};

const SettingsBody = ({ target, setTheme, theme }: {
  target: enums.ESettingsPanels,
  theme: enums.EThemes,
  setTheme: React.Dispatch<React.SetStateAction<enums.EThemes>>,
}) => {

  const render = (): React.JSX.Element => {
    switch (target) {
      case enums.ESettingsPanels.Sample:
        return (
          <Section
            $centered
            $fill
            $direction="row"
            $justify="flex-start"
            $align="flex-start"
            variants={animation.slideRight}
            initial="init"
            animate="visible"
            exit="exit"
            data-cy="settings-section-sample"
          >
            <h2>Sample</h2>
          </Section>
        );
      case enums.ESettingsPanels.Generic:
      default:
        return <renders.Generic key={2} setTheme={setTheme} theme={theme} />;
    }
  };

  return <AnimatePresence mode="wait">{render()}</AnimatePresence>;
};

const Settings = ({ disablePanel, setTheme, theme }: {
  disablePanel: () => void;
  theme: enums.EThemes;
  setTheme: React.Dispatch<React.SetStateAction<enums.EThemes>>;
}): React.JSX.Element => {
  const [target, setTarget] = useState<enums.ESettingsPanels>(enums.ESettingsPanels.Generic);

  return (
    <OverlayContainer variants={animation.slideRight} initial="init" animate="visible" exit="exit">
      <ExitButton onClick={(): void => disablePanel()} data-cy="settings-button-exit">
        <i className="icon-left-open-outline navIcon" />
      </ExitButton>
      <ContainerBody $noScroll $wrap="nowrap" $justify="flex-start" $align="flex-start">
        <PanelHeader $center data-cy="settings-header-main">
          Settings
        </PanelHeader>

        <Section $wrap="nowrap" $full $centered $fill $direction="row">
          <SettingsPanel setTarget={setTarget} target={target} />
          <SettingsBody target={target} setTheme={setTheme} theme={theme} />
        </Section>
      </ContainerBody>
    </OverlayContainer>
  );
};

export default Settings;
