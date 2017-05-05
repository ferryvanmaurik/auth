import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state  = { loggedIn: false };

    componentWillMount() {
        firebase.initializeApp({
        apiKey: "AIzaSyB31bnHbnI5Ruy11ZXA-YJ4ztb8GEPk5yc",
        authDomain: "auth-34487.firebaseapp.com",
        databaseURL: "https://auth-34487.firebaseio.com",
        projectId: "auth-34487",
        storageBucket: "auth-34487.appspot.com",
        messagingSenderId: "868604731849"
  });

  firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          this.setState({ loggedIn: true });
      } else {
          this.setState({ loggedIn: false });
      }
  });
}


renderContent() {
    switch (this.state.loggedIn) {
        case true:
            return <Button>Log out</Button>
        case false:
            return <LoginForm />
        default:
            return <Spinner size= "large" />
    }
}


    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <CardSection>
                {this.renderContent()}
                </CardSection>
            </View>
        );
    }
}

export default App;