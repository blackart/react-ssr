import * as React from 'react';
import * as styles from './Login.module.scss';
import {Fab, TextField} from "@material-ui/core";
import {useTranslation} from 'react-i18next';

const Login = () => {
    const {t} = useTranslation();
    return (
      <div className={styles.container}>
          <div className={styles.loginGroup}>
              <div className={styles.header}>
                  <span className={styles.headerTitle}>{t('login-page-title')}</span>
              </div>
              <form className={styles.form} noValidate autoComplete="off">
                  <TextField
                    id="login-input"
                    placeholder={t('ui-login-placeholder')}
                    className={styles.textField}
                    margin="normal"
                  />

                  <TextField
                    id="password-input"
                    className={styles.textField}
                    type="password"
                    placeholder={t("ui-password-placeholder")}
                    autoComplete="current-password"
                    margin="normal"
                  />

                  <Fab
                    variant="extended"
                    aria-label="Login"
                    className={styles.button}
                    size="medium"
                    color="primary">
                      {t('ui-button-login')}
                  </Fab>
              </form>
          </div>
      </div>
    );
};

export default Login;
