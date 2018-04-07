import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './index.styles';

const PostTitle = ({ classes, large, children, className }) => (
  <h1 className={[ className, classes.Default, large ? classes.Large : null ].join(' ')}>{children}</h1>
);

PostTitle.propTypes = {
  classes: PropTypes.object,
  large: PropTypes.bool,
  children: PropTypes.string,
  className: PropTypes.string
};

PostTitle.defaultProps = {
  large: false,
  children: '',
  className: ''
};

export default injectSheet(styles)(PostTitle);
