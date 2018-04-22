import React from 'react';
import injectSheet from 'react-jss';

import styles from './index.styles';

const Container = ({ children, classes, className }) => <div className={[classes.Default, className].join(' ')}>{children}</div>;

Container.defaultProps = {
  className: ''
};

export default injectSheet(styles)(Container);
