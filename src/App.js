import './App.css';
import { Amplify, API, Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import './custom.css';
import awsconfig from './aws-exports';
import { withAuthenticator, Authenticator, } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig);

function App() {

  const services = {
    async handleSignUp(formData) {
      let { username, password, attributes } = formData;
      username = username.toLowerCase();
      attributes.email = attributes.email.toLowerCase();
      return Auth.signUp({
        username,
        password,
        attributes,
        autoSignIn: {
          enabled: true,
        },
      });
    },
  };

  return (
    <Authenticator services={services} initialState="signUp">
      {({ signOut }) => <button onClick={signOut}>Sign Out</button>}
    </Authenticator>
  );
}

export default withAuthenticator(App);
