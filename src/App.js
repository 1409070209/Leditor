import React, { Component } from 'react';
import LeiEditor from "./LEditor/LeiEditor";
import ButtonListRegister from "./LEditor/ButtonListRegister";


class App extends Component {
    componentDidMount(){
        let editor = new LeiEditor(document.getElementById('editor'));
        editor.setHtml('<h1>hello world</h1>\n<div>Excalibur</div>');

        new ButtonListRegister(editor,document.getElementById('buttonList'));
    }
    render() {
        return (
            <div className="App" style={{textAlign:"center"}}>
                <div id="buttonList"> </div>
                <iframe id="editor" title='LeiEditor'> </iframe>
            </div>
        );
    }
}

export default App;
