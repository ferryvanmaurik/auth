import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';


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
                <Text>An app!</Text>
            </View>
        );
    }
}

export default App;