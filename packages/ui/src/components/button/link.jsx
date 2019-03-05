import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import s from './styles.scss';

const linkPropTypes = {
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export const PrimaryButtonLink = ({ className, children, disabled, ...props }) => (
  <Link className={cx(s.button, s.buttonPrimary, disabled && s.buttonDisabled, className)} {...props}>
    {children}
  </Link>
);

PrimaryButtonLink.defaultProps = {
  disabled: false,
  className: null,
};

PrimaryButtonLink.propTypes = linkPropTypes;

PrimaryButtonLink.Large = ({ className, ...props }) => (
  <PrimaryButtonLink className={cx(s.buttonLarge, className)} {...props} />
);

PrimaryButtonLink.Large.defaultProps = {
  disabled: false,
  className: null,
};

PrimaryButtonLink.Large.propTypes = linkPropTypes;

export const SecondaryButtonLink = ({ className, children, disabled, ...props }) => (
  <Link className={cx(s.button, s.buttonSecondary, disabled && s.buttonDisabled, className)} {...props}>
    {children}
  </Link>
);

SecondaryButtonLink.defaultProps = {
  disabled: false,
  className: null,
};

SecondaryButtonLink.propTypes = linkPropTypes;

SecondaryButtonLink.Large = ({ className, ...props }) => (
  <SecondaryButtonLink className={cx(s.buttonLarge, className)} {...props} />
);

SecondaryButtonLink.Large.defaultProps = {
  disabled: false,
  className: null,
};

SecondaryButtonLink.Large.propTypes = linkPropTypes;
