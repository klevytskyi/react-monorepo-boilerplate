import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Col = ({ className, s, m, l, style, children, ...props }) => (
  <div {...props} className={cx(styles[`col${s}`], styles[`col${m}`], styles[`col${l}`], className)} style={style}>
    {children}
  </div>
);

Col.defaultProps = {
  style: null,
  className: null,
  children: null,
  s: null,
  m: null,
  l: null,
};

Col.propTypes = {
  /* eslint-disable-next-line */
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  s: PropTypes.number,
  m: PropTypes.number,
  l: PropTypes.number,
};

export default Col;
