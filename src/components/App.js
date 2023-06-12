import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import profile from '../assets/profile.webp';

class App extends Component {
  state = { displayBio: false };

  toggleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {
    return (
      <div>
        <img src={profile} alt='profile' className='profile' />
        <h1>Hello!</h1>
        <p>I'm Glen.</p>
        <Title />
        <p>I'm always looking for more cool stuff to build...11.</p>
        {
          this.state.displayBio ? (
            <div>
              <p>I live near Minneapolis, and have been a full time dev for about 7 years now.</p>
              <p>My Javascript is my cup of tea but I know my way around a good number of others.</p>
              <p>Coding aside, I'm pretty obsessed with Midjourney's visual AI system go bicycling virtually every day because I can pay attention to podcasts and audiobooks better that way.</p>
              <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) : (
            <div>
              <button onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
        }
        <hr />
        <div class="flex-container">
        <Projects />
        </div>
        <hr />
        <SocialProfiles />
      </div>
    ); 
  }
}

export default App;
