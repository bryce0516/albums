import React, {Component} from 'react'
import {View, Text} from 'react-native'
import axios from 'axios'

class AlbumList extends Component {
  state = { 
    albums:[]
  };
  

  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }))
  }

  renderAlbums(){
    this.state.albums.map(album => <Text key={album.title}>{album.title}</Text>)
  }
  render() {
    console.log('render',this.state)
    return (
      <View>
        <Text>AlbumList</Text>
        {this.renderAlbums()}
      </View>
    )
  }
}



export default AlbumList