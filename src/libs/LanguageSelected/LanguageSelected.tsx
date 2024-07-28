import { useState, useRef } from 'react';
import { t } from 'i18next';
import { useDispatch } from 'react-redux';

import en from '../../assets/imgMaster/en.png';
import vi from '../../assets/imgMaster/vi.png';

import globalSlice from '../../redux/globalSlice';
import { LocalStorageKey } from '../../shared/models';

import './LanguageSelected.scss';

const LanguageSelect = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    localStorage.getItem(LocalStorageKey.LocalVN) || 'vi',
  );
  const dispatch = useDispatch();

  const dropdown_toggle_el = useRef<any>(null);
  const dropdown_content_el = useRef<any>(null);

  const handleChange = (value: any) => {
    setSelectedLanguage(value);
    dispatch(globalSlice.actions.setLanguage(value));
    setTimeout(function () {
      document.location = '/';
    }, 200);
  };

  const clickOutsideRef = (content_ref: any, toggle_ref: any) => {
    document.addEventListener('mousedown', (e) => {
      // user click toggle
      if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
        content_ref.current.classList.toggle('active');
      } else {
        // user click outside toggle and content
        if (content_ref.current && !content_ref.current.contains(e.target)) {
          content_ref.current.classList.remove('active');
        }
      }
    });
  };

  clickOutsideRef(dropdown_content_el, dropdown_toggle_el);

  return (
    <div className="language-select-container">
      {/* <LoadingMaster loadingMaster={loadingMaster} /> */}
      <div className="title-language">
        <p className="language-select-label">{t('language.title')}</p>
      </div>

      <div className="icon-dropdown">
        <button ref={dropdown_toggle_el} className="dropdown__toggle">
          {selectedLanguage === 'vi' ? <img src={vi} alt="vietnam" /> : <img src={en} alt="english" />}
        </button>
        <div ref={dropdown_content_el} className={`dropdown__content`} style={{ width: '200px' }}>
          <div className="header__noti">
            <h2 style={{ marginTop: '3px', marginBottom: '8px' }}>{t('language.selectTitle')}</h2>
          </div>
          <hr style={{ border: '0.2px solid #e0e0e0', padding: '0px 18px' }} />
          <div className="list-language">
            <div className="item-language" onClick={() => handleChange('vi')}>
              <img src={vi} alt="vietnam" />
              <p>Tiếng Việt</p>
            </div>
            <div className="item-language" onClick={() => handleChange('en')}>
              <img src={en} alt="english" />
              <p>English (UK)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelect;
