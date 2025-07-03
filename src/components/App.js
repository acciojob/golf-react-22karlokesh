// import React, { Component, useState } from "react";
// import '../styles/App.css';

// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             renderBall: false,
//             posi : 0,
//             ballPosition: { left: "0px" }
//         };
//         this.renderChoice = this.renderBallOrButton.bind(this)
//         this.buttonClickHandler = this.buttonClickHandler.bind(this)
//     };

//     buttonClickHandler() {
   
//    }
//     renderBallOrButton() {
// 		if (this.state.renderBall) {
// 		    return <div className="ball" style={this.state.ballPosition}></div>
// 		} else {
// 		    return <button onClick={this.buttonClickHandler} >Start</button>
// 		}
//     }

//     // bind ArrowRight keydown event
//     componentDidMount() {
      
//     }

//     render() {
//         return (
//             <div className="playground">
//                 {this.renderBallOrButton()}
//             </div>
//         )
//     }

import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,        // Whether ball is shown or button
      ballPosition: { left: "0px" }  // Inline style left position of ball
    };
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  buttonClickHandler() {
    // On start button click, render the ball
    this.setState({ renderBall: true });
  }

  handleKeyDown(event) {
    // Move ball 5px right if ArrowRight key pressed
    if (event.keyCode === 39 && this.state.renderBall) {
      let currentLeft = parseInt(this.state.ballPosition.left, 10);
      let newLeft = currentLeft + 5;
      this.setState({ ballPosition: { left: newLeft + "px" } });
    }
  }

  componentDidMount() {
    // Add keydown event listener when component mounts
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    // Clean up event listener to avoid memory leaks
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
    }
  }

  render() {
    return (
      <div className="playground">
        {this.renderBallOrButton()}
      </div>
    );
  }
}

export default App;

// }


// export default App;
