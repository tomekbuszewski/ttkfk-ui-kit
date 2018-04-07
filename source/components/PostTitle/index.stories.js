import React from 'react';
import { storiesOf } from '@storybook/react';
import backgrounds from '@storybook/addon-backgrounds';
import { COLORS } from '../../constants/styles';

import PostTitle from './index';

storiesOf('Post Title', module)
  .addDecorator(backgrounds([
    { name: "Dark", value: COLORS.DARK, default: true }
  ]))
  .add('Normal', () => <PostTitle>Lorem Ipsum</PostTitle>);
