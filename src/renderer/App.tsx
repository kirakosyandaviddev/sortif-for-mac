import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';

import LoginPage from './pages/LoginPage/LoginPage';
import LoginVerifyPage from './pages/LoginVerifyPage/LoginVerifyPage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import LoginWithNewPasswordPage from './pages/LoginWithNewPasswordPage/LoginWithNewPasswordPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import ContactDetailsPage from './pages/ContactDetailsPage/ContactDetailsPage';
import AddEditMailConfigPage from './pages/AddEditMailConfigPage/AddEditMailConfigPage';
import ProfileSettingsPage from './pages/ProfileSettingsPage/ProfileSettingsPage';
import AccountsSettingsPage from './pages/AccountsSettingsPage/AccountsSettingsPage';
import PaymentSettingsPage from './pages/PaymentSettingsPage/PaymentSettingsPage';

export default function App() {
  const routes = {
    root: '/',
    login: '/login',
    loginVerify: '/verify-login',
    signUp: '/sign-up',
    forgotPassword: '/forgot-password',
    loginWithNewPassword: '/login-with-new-password',
    dashboard: '/dashboard',
    contacts: '/contacts',
    contactDetails: '/contacts/:id',
    addEditMailConfig: '/mailConfig/:id',
    profileSettings: '/settings-profile',
    accountsSettings: '/settings-accounts',
    paymentSettings: '/settings-payment',
  };

  return (
    <Router>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route path={routes.login} component={LoginPage} />
        <Route path={routes.loginVerify} component={LoginVerifyPage} />
        <Route path={routes.signUp} component={SignUpPage} />
        <Route path={routes.forgotPassword} component={ForgotPasswordPage} />
        <Route
          path={routes.loginWithNewPassword}
          component={LoginWithNewPasswordPage}
        />
        <Route path={routes.dashboard} component={DashboardPage} />
        <Route exact path={routes.contacts} component={ContactsPage} />
        <Route path={routes.contactDetails} component={ContactDetailsPage} />
        <Route
          path={routes.addEditMailConfig}
          component={AddEditMailConfigPage}
        />
        <Route path={routes.profileSettings} component={ProfileSettingsPage} />
        <Route
          path={routes.accountsSettings}
          component={AccountsSettingsPage}
        />
        <Route path={routes.paymentSettings} component={PaymentSettingsPage} />
      </Switch>
    </Router>
  );
}
