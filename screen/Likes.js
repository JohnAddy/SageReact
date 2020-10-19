import React, { useState, useEffect } from "react";
import {Button, Image, ImageBackground, Text, View} from "react-native";
import {MovieDetails} from "./helper";

class Likes extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            favMovie: []
        }
    }



    addMethod = () =>{
        if(this.state.favMovie === null){
            console.log('No favourite movies selected')
        }

        if(this.state.favMovie){
            this.setState({favMovie: this.state.favMovie.push(this.props.movie)})
        }
    }

    render() {
        const { favMovie } = this.state;
        return(
            <MovieDetails movie={favMovie} addMethod={this.addMethod}/>
        );
    }
}
export default Likes;