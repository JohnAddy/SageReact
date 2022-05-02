import React, { useState, useEffect } from "react";
import {Button, Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import axios from "axios";
import Api from "./Api";

import {MovieDetails, MovieList} from "./helper";
import FlatList, {TouchableOpacity} from "react-native-web";


class Movies extends React.Component{

    static movies = [];

    token;

    title = 'Movies List';

    path = 'movies';

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
        const movies = await this.access.get(this.path + '/' + page + '/' + this.token);
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
        const {selected} = this.state;
        if(selected){
            if (this.path === 'movies') {
                this.setState({selected: undefined});
            } else {
                this.clean(selected);
            }
        }
    }

    manage = (id) => {
        if (id > 0) {
            const {selected} = this.state;
            if (selected && selected.key === id) {
                this.change(selected).then();
            }
        }
    }

    clean(movie) {}

    async change(movie) {
        if (movie.own) {
            //remove
            if (await this.access.delete('remove/' + this.token+ '/' + movie.key)) {
                movie.own = false;
                if (this.path === ' movies') {
                    Movies.movies = Movies.movies.filter((m) => m.key !== movie.key);
                }
            }
        } else {
            //add
            if (await this.access.post('add', {token: this.token, id: movie.key})) {
                movie.own = true;
                if (this.path === ' movies') {
                    Movies.movies.push(movie);
                }
            }
        }
        this.setState({movie});
    }

    more = (len) => {
        let {page} = this.state;
        page = page + 1;
        if (page > 3) {
            this.setState({bol: true});
        } else {
            this.fetch(page).then();
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const {movies, selected, bol} = this.state,path = `${this.uri}${this.poster}`,path2 = `${this.uri}${this.backdrop}`;

        return(
            (selected) ? <MovieDetails  title={this.title} movie={selected} addRemoveMethod={this.manage} backMethod={this.backMethod} path={path2} /> :
                (movies.length>0)?
                    <MovieList title={this.title} movies={movies} path={path} bol={bol} more={this.more} method={this.moviesSelect}/>
                    :''
        )
    }

}


export default Movies;
