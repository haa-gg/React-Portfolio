import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Jokes from './Jokes';
import Title from './Title';

class App extends Component {
    state = {displayBio:false};

    toggleDisplayBio = () =>{
        this.setState({displayBio: !this.state.displayBio}); 
      // this.state.displayBio = !this.state.displayBio;
    }

    render() {
        return (
            <div>
                <h1>Hi, I'm Glendon</h1>
            <Title />
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I am in no way a cat</p>
                            <p>Additional text here</p>
                            <button onClick={this.toggleDisplayBio}>Show less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read more</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
                <hr />
                <Jokes />
            </div>
        )
    }
}
export default App;