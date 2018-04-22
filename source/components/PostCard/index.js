import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Container from '../Container';
import Title from '../PostTitle';
import Excerpt from '../Excerpt';
import Meta from '../Meta';
import Image from '../Image';

import styles from './index.styles';

const resolveAuthor = name => `Wrapper${name}`;

const PostCard = ({ classes, large, title, excerpt, meta, image }) => (
  <header className={[classes[resolveAuthor(meta.author.name)], classes.Wrapper, large ? classes.WrapperLarge : classes.WrapperSmall].join(' ')}>
    <Image src={image} alt={title} className={classes.Image} />
    <Container className={classes.Container}>
      <Title large={large} className={classes.Title}>{title}</Title>
      <Excerpt>{excerpt}</Excerpt>
      {large && <Meta {...meta} />}
    </Container>
  </header>
);

PostCard.propTypes = {
  classes: PropTypes.object,
  large: PropTypes.bool,
  title: PropTypes.string,
  excerpt: PropTypes.string,
  meta: PropTypes.object,
  imgae: PropTypes.string
};

PostCard.defaultProps = {
  large: false,
  children: '',
  title: 'Lorem Ipsum',
  excerpt: ''
};

export default injectSheet(styles)(PostCard);
