import Question from '../question/question.js';
import Result from '../result/result.js';
import data from '../../resources/values/questions.json';
import '../question/question.css';

import LoadingCard from '../../components/loadingcard/loadingcard.js';

import FadeIn from 'react-fade-in';

class QuestionContainer extends React.Component {
  constructor() {
    super()

    this.handler = this.handler.bind(this);

    this.state = {
      current_question: 0
    };
}

  handler() {
    this.setState({
        current_question: this.state.current_question+1,

    });
}

  render() {
    const card= ()=>{

    if(this.state.current_question<data.QUESTIONS.length){
      return <Question action={this.handler} data={data.QUESTIONS[this.state.current_question]}></Question>
    } else{
      return <LoadingCard></LoadingCard>
    }
  }

    return (

      <FadeIn>
      <div>
          {card()}
                </div>
                </FadeIn>
    
    );
  }
}

export default QuestionContainer;