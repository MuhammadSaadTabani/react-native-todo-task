/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import SearchBar from './src/component/SearchBar';

const App = () => {
    return(
        <SearchBar/>
    );
}
AppRegistry.registerComponent(appName, () => App);
