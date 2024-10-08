import React, { FC } from 'react';
import cn from 'clsx';
import { WiMoonAltWaningCrescent4, WiDaySunny } from 'react-icons/wi';
import { useThemeContext, Theme } from '../../app/theming';
import s from './ThemeSwitcher.sass';

export type ThemeSwitcherProps = {
  className?: string;
};

const icons = {
  [Theme.light]: <WiDaySunny />,
  [Theme.dark]: <WiMoonAltWaningCrescent4 />,
};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <button type="button" className={cn(s.root, className)} onClick={toggleTheme}>
      {icons[theme]}
    </button>
  );
};
