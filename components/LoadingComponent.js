import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BouncingPreloader from 'react-native-bouncing-preloader';


class Loading extends Component {

    static navigationOptions = {
        title: 'Loading'
    }


    render() {
        return (
            <View style={styles.loadingView}>

                {/* Created Bouncing effect of Loading*/}
                <BouncingPreloader style={styles.image}
                    icons={[
                        require('./images/chef.png'),
                        null,
                        require('./images/tray.png'),
                        null
                    ]}

                    leftDistance={-150}
                    rightDistance={-300}
                    speed={1000}
                />
                <Text style={styles.loadingText}>Loading....</Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    loadingView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    loadingText: {
        color: '#5637DD',
        fontSize: 14,
        fontWeight: 'bold'
    }
});

export default Loading;

