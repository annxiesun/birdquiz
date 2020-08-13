

import './card.css';
import Tilt from 'react-parallax-tilt';
import ReactCardFlip from 'react-card-flip';

class Card extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        isFlipped: false,
        showFront:true,
        showBack:false
      };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ 
        isFlipped: !prevState.isFlipped,
        showFront: !prevState.showFront,
        showBack: !prevState.showBack
     }));
     this.props.action();
    
    
  }

  render() {

    return (
        <ReactCardFlip isFlipped={this.state.isFlipped}flipDirection="horizontal">
  

  <Tilt style={{visibility: this.state.showFront? 'visible' : 'hidden' }}
  perspective={1000}>
    <div onClick={this.handleClick} className="card-back card">
    <img src={"../../resources/images/back.png"} className="card-img img-fluid"/>
      </div>
      </Tilt>

      <Tilt style={{visibility: this.state.showBack? 'visible' : 'hidden' }}perspective={1000}>
  <div onClick={this.handleClick} className="card">
  <img src={this.props.bird.image} className="card-img img-fluid"/>
  </div>
  </Tilt>

  </ReactCardFlip>
    );
  }
}

export default Card;