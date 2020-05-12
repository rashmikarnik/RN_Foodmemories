import React, { Component } from 'react';
import Home from './HomeComponent';
import Recipes from './RecipesComponent';
import Loading from './LoadingComponent';
import { Icon } from 'react-native-elements';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { createStackNavigator, createDrawerNavigator, DrawerItems } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import { connect } from 'react-redux';
import { fetchRecipes } from '../redux/ActionCreators';

// mapDispatchToProps helps to get updated contents

const mapDispatchToProps = {
    fetchRecipes
}

// Create StackNavigators for each component

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        navigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#2A5666'
            },
            headerTintcolor: '#fff',
            headerTitleStyle: {
                fontSize: 24,
                color: '#fff',
                width: '70%',
            textAlign: 'center'
               
            },
          
            headerLeft: <Icon
                name='bars'
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

    //componentDidMount produce the thing when page is loaded

    componentDidMount() {
        this.props.fetchRecipes();
    }

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
        flexDirection: 'row',
        marginTop:0
    },

    stackIcon: {
        marginLeft: 10,
        color: '#ffff',
        fontSize: 24
    }
})

export default connect(null,mapDispatchToProps)(Main);