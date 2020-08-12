import React, { Component } from 'react';
import './components/titlecard/titlecard.css';
import  './resources/fonts/featherfinder.ttf';
import TitleCard from './components/titlecard/titlecard.js';

import Result from './components/result/result.js';

class App extends Component{
   render(){
      return(

        <div id="app">
           <TitleCard></TitleCard>
        
      </div>
    
      
      );
   }
}
export default App;