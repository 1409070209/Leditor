import React, { Component } from 'react';
import "./App.css";
import LeiEditor from "./LEditor/LeiEditor";
import ButtonListRegister from "./LEditor/ButtonListRegister";

let editor;
class App extends Component {
    componentDidMount(){
        editor = new LeiEditor(document.getElementById('editor'));
        new ButtonListRegister(editor,document.getElementById('buttonList'));
        editor.addHtml('<p><img id="uid_dimg_0" src="data:image/jpeg;base64,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"></p>');
        console.log(editor.getSelection());
    }
    render() {
        return (
            <div className="App">
                <div id="buttonList"> </div>
                <iframe id="editor" title="LeiEditor"> </iframe>
            </div>
        );
    }
}

export default App;
