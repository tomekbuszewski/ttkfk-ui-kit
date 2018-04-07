import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import {COLORS} from '../../constants/styles';

import Logo from './index';

storiesOf('Logo', module)
  .addDecorator(backgrounds([
    { name: "Dark", value: COLORS.DARK, default: true }
  ]))
  .add('Normal', () => <Logo />);
