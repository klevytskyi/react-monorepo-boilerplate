import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import s from './styles.scss';

const View = ({ className, ...props }) => <div {...props} className={cx(s.view, className)} />;

View.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

View.defaultProps = {
  className: null,
  children: null,
};

export { View };
