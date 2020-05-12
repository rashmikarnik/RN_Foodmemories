import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Recipes extends Component {

    static navigationOptions = {
        title: 'Recipes'
    }

    render() {
        return (
            <View>
                <Text>Recipes</Text>
            </View>
        );
    }
}

export default Recipes;