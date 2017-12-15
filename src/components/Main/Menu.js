import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Menu extends Component {
    state = { }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor:'#85A6C9' }}>
              <Text>Component Shop</Text>
            </View>
        );
    }
}

export default Menu;