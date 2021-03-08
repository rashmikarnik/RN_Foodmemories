import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import Recipecard from './CssStyles/AppStyles';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

class About extends Component {

    static navigationOptions = {
        title: 'AboutMe'
    }
    render() {
        return (
          <ParallaxScrollView
            backgroundColor="blue"
            contentBackgroundColor="#EAECEE"
            parallaxHeaderHeight={400}
            renderForeground={() => (
              <View>
                <Image
                  source={require("./images/samitaNaik.jpg")}
                  style={{ height: 400 }}
                />
              </View>
            )}
          >
            <View style={styles.container}>
              <Text style={styles.textcontainer}>
                Hello Welcome To Food Memories....{"\n \n"}
              </Text>

              <View style={styles.mainTextcontainer}>
                <Text style={styles.mainTextDisplay}>
                  I am a simple and fun loving person looking for new things to
                  do everyday. Cooking is my passion and my passion became the
                  journey of my life which I have carefully documented and
                  preserved through this Food Memories.I am very very VERY
                  passionate about food and drink. I try my best to always eat
                  with an open mind and I live for the thrill of trying out new
                  things.
                  {"\n \n"}Hope you enjoy the recipes....
                  {"\n \n"}SAMITA NAIK karnik
                </Text>
              </View>
            </View>
          </ParallaxScrollView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        height: 300,
            },
    textcontainer: {
        fontSize: 18,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    mainTextcontainer: {
        flex:1,
        margin: 10,
        borderRadius:15,
        borderWidth:0.5
    },
   mainTextDisplay: {
    fontSize: 14,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
        margin:10
   }
});

export default About;