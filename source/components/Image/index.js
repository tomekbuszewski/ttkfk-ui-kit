import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, title, alt, className, style }) => <img src={src} title={title ? title : alt} alt={alt} className={className} style={style} />;

Image.propTypes = {
  src: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

Image.defaultProps = {
  style: {}
};

export default Image;
