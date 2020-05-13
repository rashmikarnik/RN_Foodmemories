import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight, ScrollView } from 'react-native';
import { Image } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';
import * as Animatable from 'react-native-animatable';

const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        category: state.category
    };
};


class Category extends Component {

    static navigationOptions = {
        title: 'Category'
    }

    onCategoryPress = item => {
        const title = item.name;
        const category = item;
        this.props.navigation.navigate('RecipeList', { title, category });
    }

    getNumberOfRecipes = (categoryId) => {
        let count = 0;
        console.log("text" + categoryId)
        //return 6;
        this.props.recipes.recipes.map(
            data => {
                console.log("dataid" + data.catid);
                if (data.catid === categoryId) {
                    count++;

                }
            }
        );
        return count;
    }

    render() {

        const renderCategories = ({ item }) => {
            return (

                <Animatable.View animation='rotate' duration={2000} delay={1000}>
                    <TouchableHighlight
                        underlayColor='rgba(73,182,77,0.9)'
                        onPress={() => this.onCategoryPress({ category: item.id })}>
                        <View style={styles.categoriesItemContainer}>
                            <Image
                                style={styles.categoriesPhoto}
                                source={{ uri: baseUrl + item.image }}
                            />
                            <Text style={styles.categoriesName}>{item.name}</Text>
                            <Text style={styles.categoriesInfo}>{this.getNumberOfRecipes(item.categoryid)} recipes</Text>
                        </View>
                    </TouchableHighlight>
                </Animatable.View>
            );
        };

        //Loading action


        //Display Error Message if not loaded..container

        return (
            <View>
                <FlatList
                    data={this.props.category.category}
                    renderItem={renderCategories}
                    keyExtractor={item => item.id}
                />
            </View>
        );
    };
}

//StyleSheet
const styles = StyleSheet.create({
    categoriesItemContainer: {
        flex: 1,
        margin: 10,
        overflow: 'hidden',
        height: 215,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 20,
    },
    categoriesPhoto: {
        width: '100%',
        height: 155,
        borderRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        shadowColor: 'blue',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 2.0,
       
    },
    categoriesName: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#333333',
        marginTop: 8
    },
    categoriesInfo: {
        marginTop: 3,
        marginBottom: 5,
        fontSize: 12,
        color: 'blue',
        fontWeight: 'bold',
        textAlign: 'center',
    }
});

export default connect(mapStateToProps)(Category);