import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
        apiKey: "AIzaSyB31bnHbnI5Ruy11ZXA-YJ4ztb8GEPk5yc",
        authDomain: "auth-34487.firebaseapp.com",
        databaseURL: "https://auth-34487.firebaseio.com",
        projectId: "auth-34487",
        storageBucket: "auth-34487.appspot.com",
        messagingSenderId: "868604731849"
  });
}
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;