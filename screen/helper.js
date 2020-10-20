import React from "react";
import {View, Text, Button, StyleSheet, TouchableOpacity, FlatList} from "react-native-web";
import {Image} from "react-native";


export const MovieDetails = ({path, movie, addMethod, backMethod, own = false}) => {

    //console.log(movie)
    return(
        <View style={styles.kuva} >
            <Text style={styles.texti}> Title : {movie.title}</Text>
            <Image source={{uri: path+ movie.backdrop_path}} style={{width: '60%', flex: 1, flexDirection: 'row', display:'block', justifyContent:'center', alignItems:'center'}}  />
            <Text>Overview: {movie.overview}</Text>
            <Text>Release Date: {movie.release_date}</Text>

            <View style={styles.movdetails}>
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
             <View style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, backgroundColor:'grey'}}>
                 <Image source={ path+ data.item.poster_path} style={styles.imagess} />
                 <Text onPress={() => method(data.item.id)} style={{ marginLeft: 25, backgroundColor:'lightblue', alignSelf: "center",display:'block',padding:5}} >{data.item.title}</Text>
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
        marginBottom: 5,
        //resizeMode: 'contain',
        marginLeft: 30,


    }
})


export default {MovieDetails, MovieList};
