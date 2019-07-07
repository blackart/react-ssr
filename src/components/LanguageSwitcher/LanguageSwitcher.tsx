import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {LocalStorageKeys} from '../../store/meta';
import {StoreContext} from "../../store/context";

const languages = ['ru', 'en'];

const LanguageSwitcher = () => {
    const {t, i18n} = useTranslation();

    const store = React.useContext(StoreContext);


    const [value, setValue] = React.useState<string>(
      localStorage.getItem(LocalStorageKeys.LANG) || i18n.language,
    );

    React.useEffect(() => {
        i18n.changeLanguage(value).then(() => localStorage.setItem(LocalStorageKeys.LANG, value));
    }, [value, i18n]);

    const onChange = React.useCallback((e: React.ChangeEvent) => {
        setValue((e.target as HTMLSelectElement).value);
    }, []);

    return (
      <span>
          <span>{t('choose-lang')}: </span>
          <select defaultValue={value} onChange={onChange}>
              {languages.map((item, index) => <option value={item} key={index}>{item}</option>)}
          </select>
      </span>
    );
};

export default LanguageSwitcher;