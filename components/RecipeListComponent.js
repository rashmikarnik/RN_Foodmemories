import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Image, Card } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';

import YouTube from 'react-native-youtube';

class RecipeList extends Component{
    
    static navigationOptions = {
        title: 'RecipeList'
    }
  /*Youtube*/
  constructor(props) {
    super(props);
    this.state = {
        isReady: false,
        status: "",
        quality: "",
        error: ""
    };
};

    render() {
        const apikey = "AIzaSyAPciiZFW3WCTvhow4WCXd-ApTWjnHaTyI";
        return(
            <View >
            <YouTube
             ref={this._youTubeRef}
            apiKey={apikey}
            videoId="vHPh6TKxVUY" // The YouTube video ID
            play // control playback of video with true/false
            fullscreen={false} // video should play in fullscreen or inline
            loop={false} // control whether the video should loop when ended
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={styles.youtube}
            />
            <Text>{`Status: ${this.state.status}`}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    youtube: {
        alignSelf: 'stretch',
        height: 300
        }
})

export default RecipeList;