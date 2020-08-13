import QuestionContainer from '../question/question-container.js';
import './loadingcard.css';
import Lottie from 'react-lottie'
import loadAnimation from "../../resources/animations/featherload.json";
import Result from '../result/result.js';
import React from 'react';
import ReactDOM from 'react-dom';

class LoadingCard extends React.Component {

  constructor(){
    super()
  }

  componentDidMount(){
    setTimeout(function(){

      ReactDOM.render(<Result/>, document.getElementById('app'));
     
      
      
    }, 5000);
  }
  render() {
    const defaultOptions = {
      loop: false,
      autoplay: true,
      animationData: loadAnimation,

    };

    return (
      <div className="loading-card">

<Lottie className="loading-anim" options={defaultOptions}
        />
      </div>
    );
  }
}

export default LoadingCard;