import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const MenuBtn = ({ onClick, close }) => {
  const menuBtnClass = classNames({ 'menu-btn': true, close });

  return (
    <div className={menuBtnClass} onClick={onClick}>
      <div className="menu-btn__item" />
      <div className="menu-btn__item" />
      <div className="menu-btn__item" />
    </div>
  );
};

MenuBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default MenuBtn;
