import React, { useState } from 'react';
import './App.css';

import Input from './userInput.js';
import Response from './response.js';

function App(){
    const [actionHistory, setActionHistory] = useState([]);

    const handleInputReturn = (input) => {
        setActionHistory((prevHistory) => {
            if(input !== ''){
                return [...prevHistory, input]
            }

            return prevHistory;
        });
    }

    //Conditionally render helpclass and stuff.
    let inputResponse = actionHistory.map((action, index) => {
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
            <div className="help-show">To begin, type "help".</div>
            {inputResponse}
            <Input
                returnResponse={handleInputReturn}
                key={actionHistory.length}
                action={null}
            />
        </div>
    );
}

export default App;
