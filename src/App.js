import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header>
          <nav className='Nav-bar'>
            <span className='landingNav'>
             <Link to='/' className='landingLink'>HOME</Link>
            </span>
            <span className='libraryNav'>
              <Link to='/library' className='libraryLink'>LIBRARY</Link>
            </span>
            <span className='logoNav'>
              <img src='./public/assets/images/bloc_jams_logo.png' alt='Bloc Jams Logo'/>
            </span>
          </nav>
          <h1>Bloc Jams</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
