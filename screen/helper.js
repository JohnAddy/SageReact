import React from "react";
import {View, Text, Button, StyleSheet, TouchableOpacity, FlatList} from "react-native-web";
import {Image} from "react-native";
import Icon from "react-native-paper";


export const MovieDetails = ({path, movie, addRemoveMethod, backMethod, own = false, title}) => {

        //movie details page
        return(
            <View style={styles.kuva} >
                <Text style={styles.texti}> Title : {movie.title}</Text>
                <Image source={{uri: path+ movie.backdrop_path}} style={{width: '100%', flex: 1, flexDirection: 'row', display:'block', justifyContent:'center', alignItems:'center'}}  />
                <Text>Overview: {movie.overview}</Text>
                <Text>Release Date: {movie.release_date}</Text>

                <View style={styles.movdetails}>
                    {(movie.own) ? <Button title={'Remove'} onPress={() => addRemoveMethod(movie.key)} /> : <Button title={'Add'} onPress={() => addRemoveMethod(movie.key)} />}
                    <Button onPress={backMethod} title={'Back to ' + title}/>
                </View>
                {/*<Button onPress={addMethod} title={'Like'}/>*/}

            </View>
        )
    },



    MovieList = ({movies = [], path, method, more, bol = false, title}) => {
        return(
            //movieLonglist page
            /*<FlatList

                data={movies}
                keyExtractor={(item) => item.id + ''}
                renderItem={(data) => (
                    <View style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, backgroundColor:'grey', flexBasis: '100%'}}>
                        <Image source={path+ data.item.poster_path} style={styles.imagess} />
                        <Text onPress={() => method(data.item.id)}  style={{ marginLeft: 25, backgroundColor:'lightblue', alignSelf: "center",display:'block',padding:5}} >{data.item.title}</Text>
                        {(data.item.own) ? <Image source=
                                                      {require('../assets/heart.png')}
                                                  style={styles.love} /> : <Image/>}
                    </View>

                )}

            />*/
            <View style={{ width: '100%', height: '100%' }}>
                <FlatList
                    data={movies}
                    keyExtractor={(item) => item.id + ''}
                    extraData={bol}
                    ListHeaderComponent={() => <Text>{title}</Text>}
                    renderItem={( data ) => (
                        <View style={{
                            flexDirection: 'row',
                            padding: 15,
                            alignItems: 'center'
                        }}>
                            <Image source={path+ data.item.poster_path }
                                   style={{
                                       height: 50,
                                       width: 50,
                                       marginRight: 10
                                   }} />
                            <Text
                                onPress={() => method(data.item.id)}
                                style={{
                                    fontSize: 18,
                                    alignItems: 'center',
                                    color: '#65A7C5',
                                }}>{data.item.title}</Text>
                        </View>
                    )}
                    onEndReachedThreshold={0.4}
                    onEndReached={() => more(movies.length)}
                />
            </View>
        )

    };

const styles = StyleSheet.create({

    kuva: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 40,
    },
    texti: {
        fontSize: 21,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },

    movdetails: {
        marginBottom: 10,
    },



    imagess: {
        width: 90,
        height: 120,
        marginBottom: 10,
        //resizeMode: 'contain',
        marginLeft: 30,
    },

    love: {
        width: 20,
        height: 20,
        backgroundColor: 'rgba(255, 255, 255, 1.0)',
        position: 'absolute',
        alignSelf: 'center',
        top: '5%',
        left:'20%',
        zIndex: '1',
        tintColor: '#6495ed',
    },

    noLove: {
        color: 'gray'
    }
});


export default {MovieDetails, MovieList};
