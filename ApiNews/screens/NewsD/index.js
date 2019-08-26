import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class index extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount() {
      fetch("https://musixmatchcom-musixmatch.p.rapidapi.com/wsr/1.1/artist.search?s_artist_rating=desc&q_artist=coldplay&page=1&page_size=5", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "musixmatchcom-musixmatch.p.rapidapi.com",
          "x-rapidapi-key": "a1b26aa1d7mshc300319d12e45e8p1812f9jsnfaf5a8bf9557"
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
    }
  render() {
    return (
      <View> 
        <Text>TEST 2</Text>
      </View>
    );
  }
}
