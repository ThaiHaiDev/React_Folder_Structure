import { useRef, useEffect } from 'react';
import { t } from 'i18next';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/imgMaster/logo.svg';
import { RootState } from '../../redux/store';

import './Navbar.scss';
import LanguageSelected from '../../libs/LanguageSelected/LanguageSelected';

const Navbar = () => {
  const refOne = useRef<HTMLInputElement | null>(null);

  const user = useSelector((state: RootState) => state.user);
  console.log('user', user);

  useEffect(() => {
    document.addEventListener('click', hideOnClickOutside, true);
    document.addEventListener('scroll', hideOnClickOutside);
  }, []);

  const hideOnClickOutside = (e: any) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      //   setIsActive(false);
    }
  };

  return (
    <div>
      <div className="navbar">
        <NavLink to="/" className="logo">
          <div className="sidebar__logo">
            <img src={Logo} alt="company logo" className="logo-bg" />
          </div>
        </NavLink>
        <div className="navbar-right menu" style={{ display: 'flex' }}>
          <LanguageSelected />
          <NavLink to="/" end={true}>
            {t('navbar.home')}
          </NavLink>
          <NavLink to="/intro-host">{t('navbar.host')}</NavLink>
          <NavLink to="/list-room">{t('navbar.listroom')}</NavLink>
        </div>

        <div className="navbar-right" style={{ display: 'flex' }}>
          <NavLink to="/signin">{t('navbar.signin')}</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
