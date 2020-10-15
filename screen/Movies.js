import React, { useState, useEffect } from "react";
import {Button, Image, ImageBackground, Text, View} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import Api from "./Api";

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
            .then( (res) =>{
                return res.data;
            })
            .catch((err) => {
            console.log(err);
            return[];
        });
        this.setState({movies: movies ?? []});
    }

    render() {
        const movies = this.state.movies;
        return(
            <View>
                {(movies.length > 0) ?
                <View>
                    movies.map(movie => (
                    <Text key={movie.key}>{movie.name}</Text>
                    ))
                </View> : <Text>Welcome to movies!</Text>}


            </View>
        );
    }
}
export default Movies;


