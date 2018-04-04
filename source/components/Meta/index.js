import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import styles from './index.styles';

const Author = ({ classes, author, category, published }) => (
  <div className={classes.Wrapper}>
    <div className={classes.PhotoWrapper}>
      <img src={author.photo} alt={author.name} title={author.name} className={classes.Photo} />
    </div>
    <div className={classes.TextWrapper}>
      <div>
        <address className={classes.AuthorName}><span rel="author">{author.name}</span></address>
        <div className={classes.Published}><strong>{published}</strong> w kategorii <strong>{category.name}</strong></div>
      </div>
    </div>
  </div>
);

Author.propTypes = {
  classes: PropTypes.object,
  author: PropTypes.object,
  category: PropTypes.object,
  published: PropTypes.string
};

Author.defaultProps = {
  author: { name: "Test Test", photo: "https://avatars3.githubusercontent.com/u/13830635?s=460&v=4" },
  category: { name: "Test category", link: "test-category" },
  published: "1970-01-01"
};

export default injectSheet(styles)(Author);
