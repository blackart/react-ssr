import * as React from 'react';
import { useLocalStore } from 'mobx-react-lite';
import { createStore, TStore } from './store';

export const StoreContext = React.createContext<TStore | null>(null);

export const AppStoreProvider: React.FC = ({children}) => {
    const store = useLocalStore(createStore, {});

    return (
      <StoreContext.Provider value={store}>
        {children}
      </StoreContext.Provider>
    );
};