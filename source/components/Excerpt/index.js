import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './index.styles';

const Excerpt = ({ classes, children }) => (
  <p className={classes.Default}>{children}</p>
);

Excerpt.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.string
};

Excerpt.defaultProps = {
  children: ''
};

export default injectSheet(styles)(Excerpt);
