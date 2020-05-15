import React, { Component } from 'react';
import {View, ScrollView, Text} from 'react-native';
import { Image } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

class About extends Component {

    static navigationOptions = {
        title: 'AboutMe'
    }
    render() {
        return(
            <ScrollView>
            <View >
                <Image source={require('./images/cornfritters.jpg')} style={{height: 400}}/>
                <Text>Rashmi</Text>
                </View>
                </ScrollView>
        )
    }
}

export default About;