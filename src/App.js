import React, { Component } from 'react';
import "./App.css";
import LeiEditor from "./LEditor/LeiEditor";
import ButtonListRegister from "./LEditor/ButtonListRegister";

let editor;
class App extends Component {
    componentDidMount(){
        editor = new LeiEditor(document.getElementById('editor'));
        new ButtonListRegister(editor,document.getElementById('buttonList'));
        editor.addHtml('<img src="https://pic3.zhimg.com/462e6b7b95adbff825829b442a34b992_im.jpg">')
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
