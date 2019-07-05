import * as React from 'react';
import {action, computed, observable} from 'mobx';
import i18n from "i18next";

interface AppState {
    language: string
}

export default class AppStore {
    @observable language: string;
    constructor(state: AppState) {
        this.language = this.siteLanguage || state.language;
        console.log(this.siteLanguage, state.language, this.language);
    }

    set siteLanguage(lang: string | null) {
        if (lang !== null) localStorage.setItem('current-language', lang);
        else localStorage.removeItem('current-language');
    }

    get siteLanguage(): string | null {
        return localStorage.getItem('current-language');
    }
}