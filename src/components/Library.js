import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData }
  }

  render () {
    return (
      <section className="library">
        <div className="allLibrary">
          {

            this.state.albums.map( (album, index) =>
              <Link className="linkDiv" to={`/album/${album.slug}`} key={index}>
                    <img className="albumPhoto" src={album.albumCover} alt={album.title} />
                    <div className="infoLink1">{album.title}</div>
                    <div className="infoLink2">{album.artist}</div>
                    <div className="infoLink2">{album.songs.length} songs</div>
              </Link>
            )
          }
        </div>
      </section>
    );
  }
}

export default Library;
