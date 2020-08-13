import '../../common/globals.js';

class Answer extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){

    
        
        $(".question-card").fadeOut(300, function() {
            $('.question-card').fadeIn(300)
            this.props.action();
           
        });
        
        
        for (var i =0; i<this.props.answer.weights.length;i++){
            
            if(this.props.answer.weights[i].trait==global.TEMP){
                scoreCount[global.TEMP]+=this.props.answer.weights[i].value;
                
            }  else if(this.props.answer.weights[i].trait==global.PERSONALITY){
                scoreCount[global.PERSONALITY]+=this.props.answer.weights[i].value;
                
            } else if(this.props.answer.weights[i].trait==global.HABITAT){
                scoreCount[global.HABITAT]+=this.props.answer.weights[i].value;
                
            }
            
        }


        
    }

    render() {
      return (
        <div className="col-6 col-sm-6 col-lg-3">
            <button onClick={this.handleClick} className="answer">{this.props.answer.text} </button>
        </div>
      );
    }
  }
  
export default Answer;