import {LocalStorageKeys} from './meta';
import i18next from "i18next";

interface AppState {
    i18n: i18next.i18n;
}

export const createAppStore = (initState: AppState) => {
    const store = {
        i18n: initState.i18n,
        set lang(value: string) {
            store.i18n.changeLanguage(value).then(() => localStorage.setItem(LocalStorageKeys.LANG, value));
        },
        get lang() {
            return store.i18n.language;
        }
    };

    return store;
};

export type TStore = ReturnType<typeof createAppStore>;