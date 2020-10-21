import React, { useState, useEffect } from "react";
import {Button, Image, ImageBackground, Text, View} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import axios from "axios";
import Api from "./Api";

import {MovieDetails, MovieList} from "./helper";
import FlatList, {TouchableOpacity} from "react-native-web";


class Movies extends React.Component{

    token;

    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            page: 1,
            bol: false,
            selected: undefined
        };
        this.access=new Api();
    }

    async componentDidMount() {
        this.token = await AsyncStorage.getItem('token') ?? '';
        this.uri = await AsyncStorage.getItem('uri');
        this.poster= await AsyncStorage.getItem('posterSize');
        this.backdrop= await AsyncStorage.getItem('backdropSize');

        await this.fetch();
    }

    async fetch(page = 1) {
        const movies = await this.access.get('movies/' + page + '/' + this.token);
        if(movies.result && movies.result.length > 0){
            console.log(movies.result)
            const temps = this.state.movies;
            this.setState({movies: [...temps, ...movies.result ?? []], page});
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

    manage = (id) => {

    }

    more = (len) => {
        let {page} = this.state;
        page = page + 1;
        if (page > 5) {
            this.setState({bol: true});
        } else {
            this.fetch(page).then();
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const {movies, selected, bol} = this.state,path = `${this.uri}${this.poster}`;
        //console.log(movies);

        return(
            (selected) ? <MovieDetails movie={selected} addRemoveMethod={this.manage} backMethod={this.backMethod} path={path} /> :
                (movies.length>0)?

                    <MovieList movies={movies} path={path} bol={bol} more={this.more} method={this.moviesSelect}/>
                    :''
        )
    }

}
export default Movies;
