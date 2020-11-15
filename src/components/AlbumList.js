import React, {Component} from 'react'
import {View, Text, ScrollView} from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'
import Card from './Card'
class AlbumList extends Component {
  state = { 
    albums:[]
  };
  

  componentDidMount = async ()  => {
    await axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }))
  }

  renderAlbums(){
     //this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />)
     return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />)
  }

  render() {
    console.log('this.state',this.state.albums)
    return (
      <ScrollView>
        {/* {this.state.alumbs} */}
        {this.renderAlbums()}
      </ScrollView>
    )
  }
}



export default AlbumList