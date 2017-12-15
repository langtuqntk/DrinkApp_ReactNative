import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Contact from './Contact/Contact';

class Shop extends Component {
  
    constructor(props) {
      super(props);
      this.state = { selectedTab: 'home' };
    }
  
    openMenu() {
      const { open } = this.props;
      open();
    }
  
    render() {
        return (
            <View style={{ flex: 1, backgroundColor:'#85A6C9' }}>
              <Text>Component Shop</Text>
              <TabNavigator>
                <TabNavigator.Item
                  selected={this.state.selectedTab === 'home'}
                  title="Home"
                  badgeText="1"
                  onPress={() => this.setState({ selectedTab: 'home' })}>
                  <Home />
                </TabNavigator.Item>
                <TabNavigator.Item
                  selected={this.state.selectedTab === 'contact'}
                  title="Contact"
                  onPress={() => this.setState({ selectedTab: 'profile' })}>
                  <Contact />
                </TabNavigator.Item>
              </TabNavigator>
            </View>
        );
    }
}

export default Shop;