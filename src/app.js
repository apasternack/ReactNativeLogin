import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyACzqugyfcGhJ_0wlQhN8w-b5053lqonW0',
            authDomain: 'authentication-8b29b.firebaseapp.com',
            databaseURL: 'https://authentication-8b29b.firebaseio.com',
            projectId: 'authentication-8b29b',
            storageBucket: 'authentication-8b29b.appspot.com',
            messagingSenderId: '681883843255'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>An App!!</Text>
            </View>
        );
    }
}


export default App;
