import React, { Component } from 'react';
import "./App.css";
import LeiEditor from "./LEditor/LeiEditor";
import addButton from "./LEditor/addButton";


class App extends Component {
    componentDidMount(){
        let editor = new LeiEditor(document.getElementById('editor'));

        addButton(editor , document.getElementById('buttonList'));
        // editor.getBody().innerHTML = '<p>21313</p>';
        editor.execCommand('insertHTML' , '<p>Hello World</p>')
    }
    render() {
        return (
            <div className="LeiEditor">
                <div id="buttonList" className='clear'> </div>
                <iframe id="editor" title="LeiEditor"> </iframe>
            </div>
        );
    }
}

export default App;
