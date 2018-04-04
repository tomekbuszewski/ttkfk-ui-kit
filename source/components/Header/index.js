import React from 'react';
import injectSheet from 'react-jss';

import Logo from '../Logo';

import styles from './index.styles';

const Header = ({ classes }) => <header className={classes.Main}>
  <Logo className={classes.Logo} />
</header>;

export default injectSheet(styles)(Header);
