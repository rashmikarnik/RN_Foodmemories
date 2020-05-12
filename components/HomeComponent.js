import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ScrollView, FlatList } from 'react-native';
import Recipecard from './CssStyles/AppStyles';
import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';
import { Image } from 'react-native-elements';

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

    onPressRecipe = item => {
        this.props.navigation.navigate('Category', { item });
    }


    render() {

        // Help to render the Recipes in Conatainer that are available in db.json
        const renderRecipes = ({ item }) => {
           ;
            return (
                <ScrollView>
                    <TouchableHighlight
                        underlayColor='rgba(73,182,77,0.9)'
                        onPress={() => this.onPressRecipe({ recipes: item.id })}>
                        <View style={styles.container}>
                            <Image
                                style={styles.photo}
                                source={{ uri: baseUrl + item.image }}
                            />
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.category}>{item.category}</Text>
                        </View>

                    </TouchableHighlight>
                </ScrollView>
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