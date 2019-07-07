import * as React from 'react';
import {action, computed, observable} from 'mobx';
import { useTranslation } from 'react-i18next';
import {LocalStorageKeys} from './meta';

interface AppState {
}

const store = () => {
    return {
        set siteLang(lang: string | null) {
            if (lang !== null) localStorage.setItem(LocalStorageKeys.LANG, lang);
            else localStorage.removeItem(LocalStorageKeys.LANG);
        },
        get siteLang(): string | null {
            return localStorage.getItem(LocalStorageKeys.LANG);
        }
    }
};

export const createStore = () => {
    return store();
};

export type TStore = ReturnType<typeof createStore>;