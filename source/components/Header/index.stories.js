import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { COLORS } from '../../constants/styles';

import Header from './index';

storiesOf('Header', module)
  .addDecorator(backgrounds([
    { name: "Dark", value: COLORS.DARK, default: true }
  ]))
  .add('Normal', () => <Header />);
