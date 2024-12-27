import React, {useRef, useEffect, useState} from 'react';
import './App.css';

function Input({ action, returnResponse }) {
    const [inputValue, setInputValue] = useState('');
    const [textWidth, setTextWidth] = useState(4);
    const [textLength, setTextLength] = useState(0);

    // Ref to hold the previous value of `action`
    const prevActionRef = useRef();

    useEffect(() => {
        if (prevActionRef.current !== action && action === null) {
            setInputValue('');
            setTextWidth(5);
            setTextLength(0);
        }

        prevActionRef.current = action;
    }, [action]);

    const textInputChange = (e) => {
        const inputValLength = e.target.value.length;

        setInputValue(e.target.value)

        //if inputVal length is greater than our currently saved value, chars where added,
        //so increase the size of the input box.
        if(inputValLength > textLength){
            setTextLength(inputValLength);
            setTextWidth(textWidth + 7);
        //if inputVal length is less than our currently saved value, chars were removed.
        //Decrease the size of the input box.
        } else if(inputValLength < textLength && inputValLength !== 0){
            setTextLength(inputValLength);
            setTextWidth(textWidth - 7);
        //if inputVal length is zero,
        //set the input back to its original state.
        } else if(inputValLength === 0){
            setTextLength(inputValLength);
            setTextWidth(5);
        }
    }

    //This function handles submission of our input.
    const textInputSubmit = (e) => {
        //We should only be running our logic if "enter" was pressed.
        if(e.key){
            if(e.key === 'Enter'){
                returnResponse(e.target.value);
                setInputValue("");
                setTextWidth(4);
                setTextLength(0);
            } else if(e.key === 'ArrowUp'){
                console.log('Up Arrow! This is gonna do something eventually.')
            } else if(e.key === 'ArrowDown'){
                console.log('Down Arrow! This is gonna do something eventually.')
            }
        }
    }

    // const render = () => {
        return(
            <div className="prompt-wrapper">
                <div className="prompt">user@computer:~$</div>
                {!action ? 
                    <input 
                        className="user-input"
                        type="text"
                        autoFocus
                        size={inputValue.length || 1}
                        onChange={(e) => textInputChange(e)}
                        onKeyDown={(e) => textInputSubmit(e)}
                    >
                    </input>
                :
                    <input 
                        className="user-input"
                        type="text"
                        autoFocus
                        value={inputValue}
                        size={inputValue.length || 1}
                        onChange={(e) => textInputChange(e)}
                        onKeyDown={(e) => textInputSubmit(e)}
                    >
                    </input>
                }
                {!action ?
                    <div className="cursor"/>
                : ''}
            </div>
        )
    // }

}

export default Input;