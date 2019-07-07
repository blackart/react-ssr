import * as React from 'react';
import {Link} from 'react-router-dom';
import {StoreContext} from '../store/context'
import {Routes} from '../store/meta'
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher";

const Main = () => {
    const {t} = useTranslation();
    const store = React.useContext(StoreContext);

    return (
      <div>
          <div>
              <LanguageSwitcher/>
          </div>
          <span>{t('ui-welcome')}</span>
          <nav>
              <ul>
                  <li><Link to={Routes.MAIN_PAGE}>{t('page-main')}</Link></li>
                  <li><Link to={Routes.PAGE_1}>{t('page-1')}</Link></li>
                  <li><Link to={Routes.PAGE_2}>{t('page-2')}</Link></li>
              </ul>
          </nav>
      </div>
    )
};

export default Main;
