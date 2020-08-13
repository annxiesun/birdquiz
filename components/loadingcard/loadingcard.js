import QuestionContainer from '../question/question-container.js';
import './loadingcard.css';
import Lottie from 'react-lottie'
import loadAnimation from "../../resources/animations/featherload.json";
import Result from '../result/result.js';

class LoadingCard extends React.Component {

  constructor(){
    super()
  }

  componentDidMount(){
    setTimeout(function(){
      setTimeout(function(){
      ReactDOM.render(<Result/>, document.getElementById('app'));
      },3000)
      $('.result-box').fadeOut(3000);
      
    }, 5000);
  }
  render() {
    const defaultOptions = {
      loop: true,
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