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

          {

            this.state.albums.map( (album, index) =>


              <Link to={`/album/${album.slug}`} key={index}>
                <div className="albumDetails">
                  <span className="albumCovers" >
                    <img className="albumPhoto" src={album.albumCover} alt={album.title} />
                  </span>
                  <span className="albumInfo">
                    <div className="infoLink1">{album.title}</div>
                    <div className="infoLink2">{album.artist}</div>
                    <div className="infoLink2">{album.songs.length} songs</div>
                  </span>
                </div>
              </Link>

            )
          }

      </section>
    );
  }
}

export default Library;
