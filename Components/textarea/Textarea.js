import React from 'react';
import './Textarea.css';

export default function Textarea(props){
    return(
        <div className='Textarea'>
            <div 
                // value={props.markdown}
                
                contentEditable='true'
                onInput={props.handleChange}
                className='text-area'>
                    {props.markdown}
            </div>

            {/* <textarea
                value={props.markdown}
                onChange={props.handleChange}
                className='text-area'
                >
            </textarea> */}
        </div>
    )
}