import * as React from 'react';
import * as styles from './Login.module.scss';
import {Button, TextField} from "@material-ui/core";

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
                    label="Login"
                    className={styles.textField}
                    margin="normal"
                  />

                  <TextField
                    id="password-input"
                    label="Password"
                    className={styles.textField}
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                  />

                  <Button
                    className={styles.button}
                    variant="contained"
                    color="primary"
                  >
                      Login
                  </Button>
              </form>
          </div>
      </div>
    );
};

export default Login;
