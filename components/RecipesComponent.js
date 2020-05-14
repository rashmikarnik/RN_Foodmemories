import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Image, Card } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';
import * as Animatable from 'react-native-animatable';



const { width: viewportWidth } = Dimensions.get('window');


const mapStateToProps = state => {
    return {
        recipes: state.recipes,
        category: state.category
    };
};

function RenderRecipesToClickId({ recipes }) {
    //const { recipes } = props;
    let ingredientdisplay = recipes.ingredients.join('\n \n \u261E   ');
    let recipedisplay = recipes.method.join('\n \n ');
    if (recipes) {
        return (
            <ScrollView style={{ backgroundColor: '#FCF3CF' }}>

                <View>
                    <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={{ uri: baseUrl + recipes.image }} />
                        </View>
                    </Animatable.View>

                    <View style={styles.infoRecipeContainer}>
                        <Text style={styles.infoRecipeName}>{recipes.name}</Text>
                    </View>

                    <View style={styles.infoTitleContainer}>
                        <Text style={styles.infoIngredientsTitle}>INGREDIENTS</Text>
                    </View>
                    <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                        <View style={styles.infoIngredientsContainer}>
                            <Text style={styles.infoIngredients}>{'\n \u261E  '}<Text style={styles.infoIngredients}>{ingredientdisplay}</Text></Text>
                        </View>
                    </Animatable.View>
                    <View style={styles.infoTitleContainer}>
                        <Text style={styles.infoRecipeTitle}>RECIPE</Text>
                    </View>
                    <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                        <View style={styles.infoIngredientsContainer}>
                            <Text style={styles.infoIngredients}>{recipedisplay}</Text>
                        </View>
                    </Animatable.View>
                </View>

            </ScrollView>

        );
    }
    return <View />
}


class Recipes extends Component {


  

    static navigationOptions = {
        title: 'Recipes'
    }


    render() {

        const recipeId = this.props.navigation.getParam('recipeId');
        console.log("id" + recipeId);
        const recipes = this.props.recipes.recipes.filter(recipes => recipes.id === recipeId)[0];
        //console.log("test" +recipes);
       
        return (
            <ScrollView>
               <RenderRecipesToClickId recipes={recipes} /></ScrollView> 
            
        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        minHeight: 250
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: 350
    },
    infoRecipeContainer: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoRecipeName: {
        fontSize: 30,
        margin: 5,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoTitleContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 90,
        marginRight: 90,
        marginTop: 10,
        marginBottom: 10,
        height: 50,
        width: 220,
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: '#CBF8F7',
    },

    infoRecipeTitle: {
        flex: 1,
        margin: 70,
        alignItems: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoIngredientsContainer: {
        flex: 1,
        margin: 10,
        height: 300,
        borderColor: 'black',
        borderWidth: 0.5,
        borderRadius: 5,
        alignItems: 'center'
    },
    infoIngredients: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
        color: '#581845',

    },
    infoRecipeContainer: {
        flex: 1,
        margin: 10,
        alignItems: 'center'
    },
    infoIngredientsTitle: {
        flex: 1,
        margin: 50,
        alignItems: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoDescriptionRecipeContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 90,
        marginRight: 90,
        marginTop: 10,
        marginBottom: 40,
        height: 50,
        width: 200,
        borderWidth: 0.5,
        borderRadius: 5,
        backgroundColor: '#CBF8F7',
    },
   


});
export default connect(mapStateToProps)(Recipes);