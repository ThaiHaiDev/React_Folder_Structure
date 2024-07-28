import _404Page from '../../assets/imgMaster/404.png';
import Logo from '../../assets/imgMaster/logo.png';
import { useNavigate } from 'react-router-dom';
import { RouteDictionary } from '../../routes/types';

import './NotFoundPage.scss';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const backHome = () => {
    navigate(RouteDictionary.Home);
  };

  return (
    <div className="not-found">
      <div className="sidebar__logo" onClick={backHome}>
        <img src={Logo} alt="company-logo" className="logo-bg" />
      </div>
      <img src={_404Page} alt="not-found" />
    </div>
  );
};

export default NotFoundPage;
