import React, { useState } from 'react';
import * as enums from '../../../enums/index.js';
import { InnerSection, PanelButton, Section } from '../themed/index.js';
import { Header, Inline } from '../../customs/index.js';
import { Checkbox } from '@mui/material'
import changeTheme from '../utils.js';
import * as animation from '../../../animations/index.js';

export const Theme = ({
  setTheme,
  theme,
}: {
  setTheme: React.Dispatch<React.SetStateAction<enums.EThemes>>;
  theme: enums.EThemes;
}): React.JSX.Element => {
  const [value, setValue] = useState<boolean>(theme === enums.EThemes.Dark);

  return (
    <InnerSection>
      <Header>Theme</Header>
      <Inline>
        <h3>Dark mode</h3>
        <Checkbox
          data-cy="theme-checkbox"
          checked={value}
          onChange={(): void => {
            setValue(!value);
            changeTheme(setTheme, theme);
          }}
        />
      </Inline>
    </InnerSection>
  );
};

export const renderButton = (
  setTarget: React.Dispatch<React.SetStateAction<enums.ESettingsPanels>>,
  target: enums.ESettingsPanels,
): React.JSX.Element[] => {
  const keys = Object.keys(enums.ESettingsPanels) as (keyof typeof enums.ESettingsPanels)[];

  return keys.map((k) => {
    if (target === enums.ESettingsPanels[k]) {
      return (
        <PanelButton
          data-cy={`settings-button-${enums.ESettingsPanels[k]}`}
          $active
          key={k}
          onClick={(): void => setTarget(enums.ESettingsPanels[k])}
        >
          {k}
        </PanelButton>
      );
    }

    return (
      <PanelButton
        data-cy={`settings-button-${enums.ESettingsPanels[k]}`}
        key={k}
        onClick={(): void => setTarget(enums.ESettingsPanels[k])}
      >
        {k}
      </PanelButton>
    );
  });
};

export const Generic = ({ setTheme, theme }: {
  setTheme: React.Dispatch<React.SetStateAction<enums.EThemes>>,
  theme: enums.EThemes;
}): React.JSX.Element => {
  return (
    <Section
      $centered
      $fill
      $full
      $direction="column"
      $justify="flex-start"
      $align="center"
      variants={animation.slideRight}
      initial="init"
      animate="visible"
      exit="exit"
      data-cy="settings-section-theme"
    >
      <Theme setTheme={setTheme} theme={theme} />
    </Section>
  );
};
