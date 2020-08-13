import QuestionContainer from '../question/question-container.js';
import './titlecard.css';
import Icon from "../../icon.js";


class TitleCard extends React.Component {

  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    $(".title-card").fadeOut("slow", function() {
      ReactDOM.render(<QuestionContainer/>, document.getElementById('app'));
      
      
    });
  
      
    
  }

  render() {

    return (
      <div className="title-card">
        <div className="col-4-offset-4" align="center">
          <h1 className="title">Feather Finder</h1>
          <a onClick={this.handleClick} id="start" className="link start-btn" type="button">
          
          <Icon   className="featherlogo" icon="featherlogo" />
          </a>
        </div>
      </div>
    );
  }
}

export default TitleCard;