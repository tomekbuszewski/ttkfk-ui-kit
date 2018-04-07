import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { COLORS } from '../../constants/styles';

import Excerpt from './index';

storiesOf('Excerpt', module)
  .addDecorator(backgrounds([
    { name: "Dark", value: COLORS.DARK, default: true }
  ]))
  .add('Normal', () => <Excerpt>One of the most prevalent illnesses today is food poisoning. It starts as a slight discomfort a few hours after eating and grows into a life- threatening episode requiring hospitalization.</Excerpt>);
