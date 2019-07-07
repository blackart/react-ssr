import * as React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { createAppStore, TStore } from './store';
import {useTranslation} from "react-i18next";

export const AppStoreContext = React.createContext<TStore | null>(null);

export const AppStoreProvider: React.FC = ({children}) => {
    const {i18n} = useTranslation();
    const store = useLocalStore(createAppStore, {i18n: i18n});

    return (
      <AppStoreContext.Provider value={store}>
        {children}
      </AppStoreContext.Provider>
    );
};