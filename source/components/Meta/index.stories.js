import React from 'react';
import { storiesOf } from '@storybook/react';

import Meta from './index';

storiesOf('Meta', module)
  .add('Normal', () => <Meta
    author={{
      name: "Some Dude",
      photo: "https://avatars3.githubusercontent.com/u/13830635?s=460&v=4"
    }}
    published="2011-11-11"
    category={{
      name: "Some category",
      link: "some-category"
    }}
  />);
