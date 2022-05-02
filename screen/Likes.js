import React, { useState, useEffect } from "react";
import {Button, Image, ImageBackground, Text, View} from "react-native";
import {MovieDetails} from "./helper";
import Movies from "./Movies";

class Likes extends Movies {

    focus = null;

    constructor(props) {
        super(props);
        this.path = 'list';
        this.title = 'Collections';
    }

    async componentDidMount() {
        await super.componentDidMount();
        this.focus = this.props.navigation.addListener(
            'willFocus',
            this.focused
        );
    }

    focused = ()  => {
        const {movies, bol} = this.state, temps = [...Movies.movies];
        Movies.movies = [];
        if (temps.length > 0) {
            this.setState({movies: [...temps, ...movies], bol: !bol});
        }
        return true;
    }

    componentWillUnmount = () => {
        this.focus && this.focus.remove();
        this.focus = null;
    }


    clean(movie) {
        if (!movie.own) {
            const {movies} = this.state;
            this.setState({selected: undefined, movies : movies.filter((m) => m.key !== movie.key)});
        } else {
            this.setState({selected: undefined});
        }
    }
}
export default Likes;
