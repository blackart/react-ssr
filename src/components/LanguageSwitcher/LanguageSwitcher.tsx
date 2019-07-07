import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {AppStoreContext} from "../../store/context";

const languages = ['ru', 'en'];

const LanguageSwitcher = () => {
    const {t} = useTranslation();

    const store = React.useContext(AppStoreContext);
    if (!store) throw Error("Store shouldn't be null");

    const onChange = React.useCallback((e: React.ChangeEvent) => {
        store.lang = (e.target as HTMLSelectElement).value;
    }, [store.lang]);

    return (
      <span>
          <span>{t('choose-lang')}: </span>
          <select defaultValue={store.lang} onChange={onChange}>
              {languages.map((item, index) => <option value={item} key={index}>{item}</option>)}
          </select>
      </span>
    );
};

export default LanguageSwitcher;