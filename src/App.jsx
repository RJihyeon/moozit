import './App.css';
import { Amplify, API, Auth } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import './custom.css';
import awsconfig from './aws-exports';
import { withAuthenticator, Authenticator, } from '@aws-amplify/ui-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SplashPage from "./pages/SplashPage";
import UserPage from "./pages/UserPage";
import AddPostPage from "./pages/AddPostPage";

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/addPost" element={<AddPostPage />} />
        </Routes>
      </BrowserRouter>
    </Authenticator>
  );
}

export default withAuthenticator(App);
