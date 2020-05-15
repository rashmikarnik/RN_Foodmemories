import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, FlatList, TouchableHighlight } from 'react-native';
import { Image } from 'react-native-elements';
import Recipecard from './CssStyles/AppStyles';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import * as Animatable from 'react-native-animatable';



const { width: viewportWidth } = Dimensions.get('window');

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        category: state.category
    };
};



class RecipeList extends Component {

    static navigationOptions = {
        title: 'RecipeList'
    }

    getRecipes(categoryId) {
        console.log("categoryid" + categoryId);
        const recipesArray = [];
        this.props.recipes.recipes.map(data => {
            if (data.catid == categoryId) {
                recipesArray.push(data);
                console.log("recipes array with catg" + recipesArray.length);
            }
        });
        return recipesArray;
    }

       render() {

        const { navigate } = this.props.navigation;
        const item = this.props.navigation.getParam('catId');
        // console.log('hurrrray: ' +categoryPassedId);
        const recipesArray = this.getRecipes(item);
        // console.log("yahoooo: " +recipesArray);

    const renderRecipesByCategory = ({ item }) => {

        return(
            <Animatable.View animation='zoomIn' duration={2000} delay={1000}>
            <TouchableHighlight
                underlayColor='rgba(73,182,77,0.9)'
                onPress={() => navigate('Recipes', { recipeId: item.id })}
              >
                <View style={styles.container}>
                    <Image
                        style={styles.photo}
                        source={{ uri: baseUrl + item.image }}
                    />
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.category}>{item.categoryname}</Text>
                </View>

            </TouchableHighlight>
        </Animatable.View>
        );
        
    }
        return (
            <View>
                <FlatList
                    vertical
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={recipesArray}
                    renderItem={renderRecipesByCategory}
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

export default connect(mapStateToProps)(RecipeList);