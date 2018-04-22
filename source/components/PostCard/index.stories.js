import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs/react';
import backgrounds from '@storybook/addon-backgrounds';
import { COLORS } from '../../constants/styles';

import PostCard from './index';

storiesOf('Post Card', module)
  .addDecorator(withKnobs)
  .addDecorator(backgrounds([
    { name: "Dark", value: COLORS.DARK, default: true }
  ]))
  .add('Normal', () => <PostCard
    large={boolean('Is large', false)}
    image={text('Image URL', 'http://images.equipboard.com/uploads/source/image/14008/big_TOM-WAITSflat-2-copy.jpg?v=1434739177')}
    title={text('Title', 'Some title')}
    excerpt={text('Excerpt', "One of the most prevalent illnesses today is food poisoning. It starts as a slight discomfort a few hours after eating and grows into a life- threatening episode requiring hospitalization.")}
    meta={{
      author: {
        name: select('Autor', { 'Ewa': 'Ewa', 'Magda': 'Magda' }, 'Ewa'),
        photo: "https://avatars3.githubusercontent.com/u/13830635?s=460&v=4"
      },
      published: "2011-11-11",
      category: {
        name: "Some category",
        link: "some-category"
      }
    }}
  />);
