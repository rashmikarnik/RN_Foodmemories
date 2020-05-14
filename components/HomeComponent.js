import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Animated, FlatList } from 'react-native';
import Recipecard from './CssStyles/AppStyles';
import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';
import { Image } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

//Define the state

const mapStateToProps = state => {
    return {
        recipes: state.recipes
    };
};

// Home Class
class Home extends Component {


    static navigationOptions = {
        title: 'Home'
    }

   /* onPressRecipe = item => {
        this.props.navigation.navigate('Recipes', { item });
    }*/


    render() {

        const { navigate } = this.props.navigation;
        // Help to render the Recipes in Conatainer that are available in db.json
        const renderRecipes = ({ item }) => {
           
            return (
                <Animatable.View animation='zoomIn' duration={2000} delay={1000}>
                    <TouchableHighlight
                        underlayColor='rgba(73,182,77,0.9)'
                        onPress={() => navigate('Recipes', { recipeId: item.id })}>
                        <View style={styles.container}>
                            <Image
                                style={styles.photo}
                                source={{ uri: baseUrl + item.image }}
                            />
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.category}>{item.category}</Text>
                        </View>

                    </TouchableHighlight>
                </Animatable.View>
            );
        };

        //Loading action
        if (this.props.recipes.isLoading) {
            return <Loading />
        }

        //Display Error Message if not loaded..container
        if (this.props.recipes.errMess) {
            return (
                <View>
                    <Text>{this.props.recipes.errMess}</Text>
                </View>
            );
        }

        return (
            <View>
                <FlatList
                    vertical
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={this.props.recipes.recipes}
                    renderItem={renderRecipes}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: Recipecard.container,

    photo: Recipecard.photo,
    title: Recipecard.title,
    category: Recipecard.category




});

export default connect(mapStateToProps)(Home);