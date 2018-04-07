import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './index.styles';

const Button = ({ href, children, classes }) => <button className={classes.Normal}>{children}</button>;

Button.propTypes = {
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  children: PropTypes.any,
  classes: PropTypes.object
};

Button.defaultProps = {
  href: false
};

export default injectSheet(styles)(Button);
