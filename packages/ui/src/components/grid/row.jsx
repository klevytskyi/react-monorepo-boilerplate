import React from 'react';
import css from 'classnames';
import PropTypes from 'prop-types';

import s from './styles.scss';

const Row = ({ className, children, ...props }) => (
  <div {...props} className={css(s.row, className)}>
    {children}
  </div>
);

Row.defaultProps = {
  className: null,
  children: null,
};

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Row;
