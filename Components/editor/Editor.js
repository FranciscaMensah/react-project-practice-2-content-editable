import React from 'react';
import {functions} from '../../functions';
import './Editor.css';
import Tabs from '../tabs/Tabs';
import Write from '../write/Write';
import Preview from '../preview/Preview';

export default function Editor(){
    const [isPreview, setIsPreview] = React.useState(false);
    const [markdown, setMarkDown] = React.useState('Type here');

    function handleChange (event){
        // setMarkDown(event.target.value);
        // setMarkDown(event.target.textContent);
        // setMarkDown(()=>
            // {return event.target.textContent})
        console.log(markdown);
        console.log(event.target.textContent)
    }

    function toggleWrite(){
        setIsPreview(prevState => false);
    }

    function togglePreview (event){
        setIsPreview(prevState => true);
    }

    const edit = {
        makeBold(){
            const selectedText = functions.getSelectedText();
            const currentMarkdown = markdown;
            console.log(currentMarkdown)
            const boldText = '**'+ selectedText +'**';
            const newMarkdown = currentMarkdown.replace(selectedText, boldText);
            setMarkDown(newMarkdown);
            console.log(boldText);
        },

        makeItalic(){
            // const selectedText = functions.getSelectedText();
            const currentMarkdown = markdown;
            console.log(currentMarkdown)
            // const italicText = '_'+ selectedText +'_';
            // const newMarkdown = currentMarkdown.replace(selectedText, italicText);
            const newMarkdown = currentMarkdown.replace(window.getSelection(), `_${window.getSelection()}_`)
            setMarkDown(newMarkdown);
            // console.log(italicText);
            console.log(newMarkdown);
        },

        makeMeBold(){
            const currentMarkdown = markdown;
            console.log(currentMarkdown);
            const selectedText = window.getSelection();
            const start = selectedText.anchorOffset;
            const end = selectedText.focusOffset - 1;
            console.log(currentMarkdown[start]);
            console.log(currentMarkdown[end]);
        }
    };

    return (
        <div className='editor'>
            <Tabs
                isPreview={isPreview}
                togglePreview={togglePreview}
                toggleWrite={toggleWrite}
            />
            {isPreview
            ?
            <Preview
                markdown={markdown}/>
            :
            <Write
                markdown={markdown}
                handleChange={handleChange}
                edit={edit}
            />
            }
            <button onClick={functions.getText}>Save note</button>
        </div>
    )
}