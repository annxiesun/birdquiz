
import TitleCard from '../titlecard/titlecard.js'
import Tilt from 'react-parallax-tilt';
import Particles from 'react-particles-js';
import './result.css';

import particleParam from '../particles/particles.json'

import data from '../../resources/values/results.json';

import FadeIn from 'react-fade-in';

class Result extends React.Component {

  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this);
}

handleClick(){

  $(".result-box").fadeOut("slow");
  ReactDOM.render(<TitleCard/>, document.getElementById('app'));
  
}
  render() {

    let bird=-1;
    
    if(global.scoreCount[global.TEMP]<=0){

      if(global.scoreCount[global.PERSONALITY]<0){
        
        if(global.scoreCount[global.HABITAT]<=0){
            bird=0;
        } else{
          bird=1;
        }
      } else{
        if(global.scoreCount[global.HABITAT]<=0){
          bird=2;
        } else{
          bird=3;
        }

      }
    } else{
      if(global.scoreCount[global.PERSONALITY]<0){
        
        if(global.scoreCount[global.HABITAT]<=0){
          bird=4;
        } else{
          bird=5;
        }
      } else{
        if(global.scoreCount[global.HABITAT]<=0){
          bird=6;
        } else{
          bird=7;
        }

      }

    }

    return (
<FadeIn>
      <div className="row result-box">
        <div className="col-4">
          <h2>You got</h2>
          <h1>{data.RESULT[bird].name}</h1>
          <p>
          {data.RESULT[bird].description}
        </p>
          <button class="retry-btn" onClick={this.handleClick}>Retry</button>
        </div>

        <div className="col-4 ">
<Tilt className="tilt parallax-effect-glare-scale" 
  
  perspective={1000}
  gyroscope={true}
>
  
<Particles className = "particles" params={particleParam}>
</Particles>
  <div className="image">
    

  <img src={data.RESULT[bird].image} className="card-img img-fluid"/>


  </div>
  
  </Tilt>
        </div>
      </div>
</FadeIn>
    )
  }
}

export default Result;