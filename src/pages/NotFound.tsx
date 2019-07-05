import * as React from 'react';
import {WithTranslation, withTranslation} from 'react-i18next';

interface NotFoundProps extends WithTranslation {

}

class NotFound extends React.Component<NotFoundProps> {
    render() {
        let {t} = this.props;

        return (
            <div>{t('404-error')}</div>
        );
    }
}

export default withTranslation()(NotFound);
