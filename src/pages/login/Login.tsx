import * as React from 'react';
import * as styles from './Login.module.scss';
import {Button, Fab, TextField} from "@material-ui/core";

const Login = () => {
    return (
      <div className={styles.container}>
          <div className={styles.loginGroup}>
              <div className={styles.header}>
                  <span className={styles.headerTitle}>SIGN IN</span>
              </div>
              <form className={styles.form} noValidate autoComplete="off">
                  <TextField
                    id="login-input"
                    placeholder="login"
                    className={styles.textField}
                    margin="normal"
                  />

                  <TextField
                    id="password-input"
                    className={styles.textField}
                    type="password"
                    placeholder="password"
                    autoComplete="current-password"
                    margin="normal"
                  />

                  <Fab
                    variant="extended"
                    aria-label="Login"
                    className={styles.button}
                    size="medium"
                    color="primary">
                      Login
                  </Fab>
              </form>
          </div>
      </div>
    );
};

export default Login;
