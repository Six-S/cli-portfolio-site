import React, { Component } from 'react';
import './App.css';

import Input from './userInput.js';
import Response from './response.js';

class App extends Component {

  constructor(){
    super()
    this.state = {
      'helpClass': "help-show",
      'userLevel': "$",
      'actionHistory': []
    }
  }

  handleInputReturn(input){
    if(input !== ''){
      this.setState(prevState => ({
        actionHistory: [...prevState.actionHistory, input]
      }));
    }
  }

  //Conditionally render helpclass and stuff.
  render() {
    let inputResponse = this.state.actionHistory.map((action, index) => {
      return (
        <div key={index} className="input-response-pair">
          <div className="prompt-wrapper">
            <div className="prompt">user@computer:~$</div>
            <span className="static-input">{action}</span>
          </div>
          <Response action={action} />
        </div>
      );
    });

    return (
      <div className="top">
        <div className={this.state.helpClass}>To begin, type "help".</div>
        {inputResponse}

        <Input
          returnResponse={this.handleInputReturn.bind(this)}
          key={this.state.actionHistory.length}
          action={null}
        />
      </div>
    );
  }
}

export default App;
