import React, { Component } from 'react';
import Home from './HomeComponent';
import Recipes from './RecipesComponent';
import Loading from './LoadingComponent';
import { Icon } from 'react-native-elements';
import { View, Text, ScrollView, StyleSheet, SafeAreaView, Image } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';

// Create StackNavigators for each component

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintcolor: '#fff',
            headerTitleStyle: {
                color: '#fff',
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);

const RecipesNavigator = createStackNavigator(
    {
        Recipes: { screen: Recipes }
    },
    {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintcolor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='cutlery'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }

);

const LoadingNavigator = createStackNavigator(
    {
        Home: { screen: Loading }
    },
    {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintcolor: '#fff',
            headerTitleStyle: {
                color: '#fff',
            },
            headerLeft: <Icon
                name='home'
                type='font-awesome'
                iconStyle={styles.stackIcon}
                onPress={() => navigation.toggleDrawer()}
            />
        })
    }
);


/* Customize the look of Drawer */

const CustomDrawerContentComponent = props => (
    <ScrollView>
        <SafeAreaView
            style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never' }}>
            <View style={styles.drawerHeader}>
                <View>
                    <Image source={require('./images/samLogo.png')} />
                </View>
            </View>
       <DrawerItems {...props}/>
        </SafeAreaView>
    </ScrollView>

)

/* Create Drawer Navigator */

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                drawerLable: 'Home',
                drawerIcon: () => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        iconColor='AD4832'
                        color='#AD4832'
                        reverse
                    />
                )
            }
        },

        Recipes: {
            screen: RecipesNavigator,
            navigationOptions: {
                drawerLable: 'Home',
                drawerIcon: () => (
                    <Icon
                        name='cutlery'
                        type='font-awesome'
                        size={24}
                        iconColor='black'
                        color='#AD4832'
                        reverse
                    />
                )
            }

        },

        Loading: {
            screen: LoadingNavigator,
            navigationOptions: {
                drawerLable: 'Loading',
                drawerIcon: () => (
                    <Icon
                        name='home'
                        type='font-awesome'
                        size={24}
                        iconColor='AD4832'
                        color='#AD4832'
                        reverse
                    />
                )
            }
        },

    },
    {
        drawerBackgroundColor: '#CEC8FF',
        contentComponent: CustomDrawerContentComponent
    }
);

class Main extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight
            }}>
                <MainNavigator />
            </View>
        );
    };
}

const styles = StyleSheet.create({
    
    drawerHeader: {
        backgroundColor:'#4C231A',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },

    stackIcon: {
        marginLeft: 10,
        color: '#ffff',
        fontSize: 24
    }
})

export default Main;