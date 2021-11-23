import React from 'react';
import { DivProps } from '.';

const SettingContext = React.createContext<
  (screen: any, direction: DivProps['direction']) => void
>((screen) => null);

export default SettingContext;
