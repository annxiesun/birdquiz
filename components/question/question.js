import './question.css'
import Answer from '../answer/answer.js';



class Question extends React.Component {
    constructor(props){
        super(props)

    }
    render() {
  
  
        const items = []
        
        
        for (var i = 0; i < this.props.data.answers.length; i++) {
            items.push(<Answer key={i} action={this.props.action} answer={this.props.data.answers[i]}></Answer>)
        } 

      return (
          <div className="question-card">
  
                  <div className="col-sm-4-offset-4" align="center">
  
                      <h1 className="question">{this.props.data.question}</h1>
  
                      <div className="row answer-group">
  
                          {items}
  
  
                      </div>
  
  
                  </div>
  
  
              </div>
      );
    }
  }
  
export default Question;