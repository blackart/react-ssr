import * as React from 'react';
import {WithTranslation, withTranslation} from 'react-i18next';
import {ChangeEvent} from "react";

interface LanguageSwitcherProps extends WithTranslation {

}

class LanguageSwitcher extends React.Component<LanguageSwitcherProps> {
    constructor(props: LanguageSwitcherProps) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    private onChange = (e: ChangeEvent) => {this.props.i18n.changeLanguage((e.target as HTMLSelectElement).value)};

    render() {
        let switcher = (
          <select onChange={this.onChange}>
              <option value={'ru'}>ru</option>
              <option value={'en'}>en</option>
          </select>
        );

        return switcher;
    }
}

export default withTranslation()(LanguageSwitcher);