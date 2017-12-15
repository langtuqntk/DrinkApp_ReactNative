import React, { Component } from 'react';
import { View, Text, StatusBar, Navigator } from 'react-native';
import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import OrderHistory from './OrderHistory/OrderHistory';
import Main from './Main/Main';

StatusBar.setHidden(true);

export default class App extends Component {
  render() {
    return (
      <Navigator 
          initialRoute={{ name: "MAIN" }}
          renderScene={(route, navigator) => {
            switch (route.name) {
              case 'MAIN': return <Main navigator={navigator} />;
              case 'CHANGE_INFO': return <ChangeInfo navigator={navigator} />;
              case 'AUTHENTICATION': return <Authentication navigator={navigator} />;
              default: return <OrderHistory navigator={navigator} />;
            }
          }}
          configureScene={route => {
              if (route.name === 'AUTHENTICATION') return Navigator.SceneConfigs.FloatFromRight;
              return Navigator.SceneConfigs.FloatFromLeft;
          }}
        />
    );
  }
}