import React from "react";
import {View, Text, Button, StyleSheet, TouchableOpacity, FlatList} from "react-native-web";
import {Image} from "react-native";


export const MovieDetails = ({path, movie, addRemoveMethod, backMethod, own = false}) => {

    //console.log(movie)
    return(
        <View style={styles.kuva} >
            <Text style={styles.texti}> Title : {movie.title}</Text>
            <Image source={{uri: path+ movie.backdrop_path}} style={{width: '60%', flex: 1, flexDirection: 'row', display:'block', justifyContent:'center', alignItems:'center'}}  />
            <Text>Overview: {movie.overview}</Text>
            <Text>Release Date: {movie.release_date}</Text>

            <View style={styles.movdetails}>
            {(movie.own) ? <Button title={'Remove'} onPress={() => addRemoveMethod(movie)}/> : <Button title={'Add'} onPress={() => addRemoveMethod(movie)} />}
            <Button  onPress={backMethod} title={'Back to Movies'}/>
            </View>
           {/*<Button onPress={addMethod} title={'Like'}/>*/}

        </View>
    )
},



MovieList = ({movies = [], path, poster_path, method, bol = false}) => {

    // return(
    //     (movies.map(mov=>(
    //         <TouchableOpacity onPress={() => method(mov.id)} activeOpacity={0.8} key={mov.id}>
    //             <View style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, backgroundColor:'grey'}}>
    //                 <Image source={{uri: path+ mov.poster_path}} style={styles.imagess} />
    //                 <Text style={{ marginLeft: 25, backgroundColor:'lightblue', alignSelf: "center",display:'block',padding:5}} >{mov.title}</Text>
    //             </View>
    //         </TouchableOpacity>
    //
    //     )))
    // )


    return(
        <FlatList

         data={movies}
         keyExtractor={(item) => item.id + ''}
         renderItem={(data) => (
             <View style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, backgroundColor:'grey', flexBasis: '100%'}}>
                 <Image source={path+ data.item.poster_path} style={styles.imagess} />
                 <Text onPress={() => method(data.item.id)}  style={{ marginLeft: 25, backgroundColor:'lightblue', alignSelf: "center",display:'block',padding:5}} >{data.item.title}</Text>
                 {(data.item.own) ? <Image source=
                                               {require('../assets/heart.png')}
                                                style={styles.love} /> : <Image/>}
                 {/*{(data.item.own) ? <Button title={'Remove'}/> : <Button title={'Add'} />}*/}
             </View>

         )}

        />
    )

};

const styles = StyleSheet.create({

    kuva: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texti: {
        fontSize: 21,
        justifyContent: 'center',
        alignItems: 'center',
        width: '60%',
    },

    movdetails: {
        width: 150,
        margin: 20,
        padding: 10,

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
