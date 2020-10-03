import React, { Component } from 'react';
import './components/titlecard/titlecard.css';
import  './resources/fonts/featherfinder.ttf';
import TitleCard from './components/titlecard/titlecard.js';

import Result from './components/result/result.js';
import Particles from 'react-particles-js';
import ParticleParams from './components/particles/particles.json'

//<TitleCard></TitleCard>

class App extends Component{
   render(){
      return(
<div>
        <div id="app">
           <TitleCard></TitleCard>
           
        
      </div>
      <Particles  params={ParticleParams}/>
      </div>
    
      
      );
   }
}
export default App;