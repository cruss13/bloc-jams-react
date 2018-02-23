import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';

class Album extends Component {
  constructor(props) {
    super(props);

    const album = albumData.find( album => {
      return album.slug === this.props.match.params.slug
    });

    this.state = {
      album: album
    };
  }

  render () {
    return (
      <section className="album">
        <section id="album-info">
          <img id="album-cover-art" src={this.state.album.albumCover}/>
          <div className="album-details">
            <h1 id="album-title">{this.state.album.title}</h1>
            <h2 className="artist">{this.state.album.artist}</h2>
            <div id="release-info">{this.state.album.releaseInfo}</div>
          </div>
        </section>
        <table id="song-list">
          <colgroup>
            <col id="song-number-column" />
            <col id="song-title-column" />
            <col id="song-duration-column" />
          </colgroup>
          <tbody className="song-table">
            {
              this.state.album.songs.map ( (album, index) =>
              <Link to={`/album/${album.slug}`} key={index}>
                <tr className="song-row">
                  <td>{album.index}</td>
                  <td>{album.title}</td>
                  <td>{album.duration}</td>
                </tr>
              </Link>
              )
            }
          </tbody>
        </table>
      </section>
    );
  }

}

export default Album;
