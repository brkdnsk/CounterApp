/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/navigation/AppNavigator.js';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
