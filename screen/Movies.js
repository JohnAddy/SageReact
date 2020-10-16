import React, { useState, useEffect } from "react";
import {Button, Image, ImageBackground, Text, View} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import Api from "./Api";
import FlatList from "react-native-web";

class Movies extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            page: 1
        };
        this.access=new Api();
    }

    async componentDidMount() {
        const token = await AsyncStorage.getItem('token') ?? '', movies = await this.access.get('movies/' + this.state.page + '/' + token)
           /* .then( async (res) =>{
               // console.log(res);
                return await res.result;
            })
            .catch((err) => {
            console.log(err);
            return[];
        });*/

       if(movies.result && movies.result.length > 0){

          const uri= await AsyncStorage.getItem('uri');
          const  poster= await AsyncStorage.getItem('posterSize');
           this.setState({movies: movies.result ?? [], uri,poster});
       }
    }

    detailHandler=()=> {
      return console.log('movie clicked')
            }


    render() {
        const {movies,uri,poster} = this.state,path = `${uri}${poster}`;
        console.log(movies);
        return(
            /*(movies.length>0)?
                <View>
                    {movies.map(mov=>(
                      <Text key={mov.key}>{mov.title}</Text>
                    ))}
                </View>
                :
                <View>
                  <Text> Welcome to Movies</Text>

                </View>

*/

            (movies.length>0)?

                (movies.map(mov=>(
            <View key={mov.id}style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, backgroundColor:'grey'}}>
                <Image source={{uri: path+ mov.poster_path}} style={{width: 70, height: 100, display:'block'}}onPress={this.detailHandler} />
                <Text style={{ backgroundColor:'lightblue', alignSelf: "center",display:'block',padding:5}}>{mov.title}</Text>
            </View>
                    )))
                :''
        )
    }

}
export default Movies;


