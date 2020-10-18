import React, { useState, useEffect } from "react";
import {Button, Image, ImageBackground, Text, View} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import axios from "axios";
import Api from "./Api";

import {MovieDetails, MovieList} from "./helper";
import FlatList, {TouchableOpacity} from "react-native-web";


class Movies extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            page: 1,
            selected: undefined
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
          const  backdrop= await AsyncStorage.getItem('backdropSize');
          console.log(poster, uri, backdrop)
           this.setState({movies: movies.result ?? [], uri,poster, backdrop});
       }

    }

    moviesSelect = (id) => {
        const movie = this.state.movies.find((mov) => mov.id === id);
        if (movie) {
            this.setState({selected: movie});
        }
    }

    backMethod = () =>{
        if(this.state.selected !== null){
            this.setState({selected: undefined})
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const {movies,uri,poster, selected} = this.state,path = `${uri}${poster}`;
        console.log(movies);

        return(
            (selected) ? <MovieDetails movie={selected} backMethod={this.backMethod} path={path}/> :
            (movies.length>0)?

                <MovieList movies={movies} path={path} method={this.moviesSelect}/>

                :''
        )
    }

}
export default Movies;
