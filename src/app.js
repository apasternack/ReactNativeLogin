import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: false };

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyACzqugyfcGhJ_0wlQhN8w-b5053lqonW0',
            authDomain: 'authentication-8b29b.firebaseapp.com',
            databaseURL: 'https://authentication-8b29b.firebaseio.com',
            projectId: 'authentication-8b29b',
            storageBucket: 'authentication-8b29b.appspot.com',
            messagingSenderId: '681883843255'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });                
            }
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
