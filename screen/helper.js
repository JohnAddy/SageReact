import React from "react";
import {View, Text, Button, TouchableOpacity} from "react-native-web";
import {Image} from "react-native";


export const MovieDetails = ({path, movie, addRemoveMethod, backMethod, own = false}) => {
    //console.log(movie)
    return(
        <View>
            <Text>{movie.title}</Text>
            <Image source={{uri: path+ movie.backdrop_path}} style={{width: 175, flex: 1, flexDirection: 'row', height: 300, display:'block', justifyContent:'center', alignItems:'center'}}  />
            <Text>{movie.overview}</Text>
            <Text>{movie.release_date}</Text>

            <Button onPress={backMethod}>Back</Button>
        </View>
    )
},

MovieList = ({movies = [], path, method, bol = false}) => {

    return(
        (movies.map(mov=>(
            <TouchableOpacity onPress={() => method(mov.id)} activeOpacity={0.8} key={mov.id}>
                <View style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, backgroundColor:'grey'}}>
                    <Image source={{uri: path+ mov.poster_path}} style={{width: 70, height: 100, display:'block'}}  />
                    <Text style={{ backgroundColor:'lightblue', alignSelf: "center",display:'block',padding:5}} >{mov.title}</Text>
                </View>
            </TouchableOpacity>

        )))
    )
};

export default {MovieDetails, MovieList};
