
import TitleCard from '../titlecard/titlecard.js'
import Particles from 'react-particles-js';
import './result.css';

import particleParam from '../particles/particles.json'

import data from '../../resources/values/results.json';

import FadeIn from 'react-fade-in';

import Card from '../card/card.js';

class Result extends React.Component {

  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this);
    this.handler = this.handler.bind(this);
    this.state = {
      firstClick: true
    };
    
}
componentDidMount(){
  $(document.getElementById('result-text')).fadeOut(1);
}
handler(){

  if(this.state.firstClick){
    $(document.getElementById('result-text')).fadeIn(1000);
    this.setState(
      firstClick=false
    );
  }
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
        <div className="col-4" >
          <div id="result-text">
          <h2>You got</h2>
          <h1>{data.RESULT[bird].name}</h1>
          <p>
          {data.RESULT[bird].description}
        </p>
      
          <button className="retry-btn" onClick={this.handleClick}>Retry</button>
          </div>
        </div>

        <div className="col-4 ">
      <Card bird={data.RESULT[bird]} action={this.handler}></Card>
        </div>
      </div>
</FadeIn>
    )
  }
}

export default Result;

//<Particles className = "particles" params={particleParam}>
//</Particles>