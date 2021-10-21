import { useHistory } from 'react-router';

const useNavigation = () => {
  const routes = {
    root: '/',
    login: '/login',
    loginVerify: '/verify-login',
    signUp: '/sign-up',
    forgotPassword: '/forgot-password',
    loginWithNewPassword: '/login-with-new-password',
    dashboard: '/dashboard',
    contacts: '/contacts',
    contactDetails: (id: string) => `/contacts/${id}`,
    addEditMailConfig: (id: string) => `/mailConfig/${id}`,
    profileSettings: '/settings-profile',
    accountsSettings: '/settings-accounts',
    paymentSettings: '/settings-payment',
  };

  const history = useHistory();

  const navigate = (path: string) => {
    history.push(path);
  };

  const goBack = () => {
    history.goBack();
  };

  return { routes, navigate, goBack, history };
};

export default useNavigation;
