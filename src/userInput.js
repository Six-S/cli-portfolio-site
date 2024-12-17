import React, { Component } from 'react';
import './App.css';

class Input extends Component{

    constructor(props){
        super(props);
        this.state = {
            textWidth: 4,
            textLength: 0,
            currentUser: "user@computer:~$",
            inputValue: ''
        }
    }

    componentDidUpdate(prevProps) {
        // Reset the input field when `action` becomes null again
        if (this.props.action !== prevProps.action && this.props.action === null) {
            this.setState({ inputValue: "", textWidth: 5, textLength: 0 });
        }
    }

    //This function handles the width of the text box.
    //We use this to simulate the block carat commonly seen in a Linux CLI enviornment.
    textInputChange(e){
        const inputValLength = e.target.value.length;

        this.setState({ inputValue: e.target.value });

        //if inputVal length is greater than our currently saved value, chars where added,
        //so increase the size of the input box.
        if(inputValLength > this.state.textLength){
            this.setState({ 
                'textLength': inputValLength,
                'textWidth': this.state.textWidth + 7
            });
        //if inputVal length is less than our currently saved value, chars were removed.
        //Decrease the size of the input box.
        } else if(inputValLength < this.state.textLength && inputValLength !== 0){
            this.setState({ 
                'textLength': inputValLength,
                'textWidth': this.state.textWidth - 7
            });
        //if inputVal length is zero,
        //set the input back to its original state.
        } else if(inputValLength === 0){
            this.setState({ 
                'textLength': inputValLength,
                'textWidth': 5
            });
        }
    }

    //This function handles submission of our input.
    textInputSubmit(e){
        //We should only be running our logic if "enter" was pressed.
        if(e.key){
            if(e.key === 'Enter'){
                this.props.returnResponse(e.target.value);
                this.setState({ inputValue: "", textWidth: 4, textLength: 0 });
            } else if(e.key === 'ArrowUp'){
                console.log('Up Arrow! This is gonna do something eventually.')
            } else if(e.key === 'ArrowDown'){
                console.log('Down Arrow! This is gonna do something eventually.')
            }
        }
    }

    render(){

        return(
            <div className="prompt-wrapper">
                <div className="prompt">user@computer:~$</div>
                {!this.props.action ? 
                    <input 
                        className="user-input"
                        type="text"
                        autoFocus
                        size={this.state.inputValue.length || 1}
                        onChange={(e) => this.textInputChange(e)}
                        onKeyDown={(e) => this.textInputSubmit(e)}
                    >
                    </input>
                :
                    <input 
                        className="user-input"
                        type="text"
                        autoFocus
                        value={this.state.inputValue}
                        size={this.state.inputValue.length || 1}
                        onChange={(e) => this.textInputChange(e)}
                        onKeyDown={(e) => this.textInputSubmit(e)}
                    >
                    </input>
                }
                {!this.props.action ?
                    <div className="cursor"/>
                : ''}
            </div>
        )
    }
}

export default Input;