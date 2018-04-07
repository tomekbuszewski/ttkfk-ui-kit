import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Title from '../PostTitle';
import Excerpt from '../Excerpt';
import Meta from '../Meta';

import styles from './index.styles';

const PostCard = ({ classes, large, title, excerpt, meta }) => (
  <header className={[classes.Wrapper, large ? classes.WrapperLarge : classes.WrapperSmall].join(' ')}>
    <Title large={large} className={classes.Title}>{title}</Title>
    <Excerpt>{excerpt}</Excerpt>
    {large && <Meta {...meta} />}
  </header>
);

PostCard.propTypes = {
  classes: PropTypes.object,
  large: PropTypes.bool,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  meta: PropTypes.object
};

PostCard.defaultProps = {
  large: false,
  children: '',
  title: 'Lorem Ipsum',
  excerpt: ''
};

export default injectSheet(styles)(PostCard);
