import * as React from 'react';
import {Link} from 'react-router-dom';
import {WithTranslation, withTranslation} from 'react-i18next';
import LanguageSwitcher from "../components/LanguageSwitcher/LanguageSwitcher";

interface AppProps extends WithTranslation {

}

class Main extends React.Component<AppProps> {
    render() {
        const {t, i18n} = this.props;

        return (
          <div>
              <div>
                <LanguageSwitcher/>
              </div>
              <span>{t('ui-welcome')}</span>
              <nav>
                  <ul>
                      <li><Link to='/'>Main</Link></li>
                      <li><Link to='/page1'>Page 1</Link></li>
                      <li><Link to='/page2'>Page 2</Link></li>
                  </ul>
              </nav>
          </div>
        );
    }
}

export default withTranslation()(Main);
