import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { COLORS } from '../../constants/styles';

import Button from './index';

storiesOf('Button', module)
  .addDecorator(backgrounds([
    { name: "Ewa", value: COLORS.EWA, default: true },
    { name: "Magda", value: COLORS.MAGDA },
    { name: "Dark", value: COLORS.DARK }
  ]))
  .add('Normal', () => <Button>Test</Button>);
