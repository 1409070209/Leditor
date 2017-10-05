import React, { Component } from 'react';
import "./App.css";
import LeiEditor from "./LEditor/LeiEditor";
import ButtonListRegister from "./LEditor/ButtonListRegister";
import {domAttrUtil} from "./LEditor/util/FunctionUtils";

let editor;
class App extends Component {
    componentDidMount(){
        editor = new LeiEditor(document.getElementById('editor'));
        new ButtonListRegister(editor,document.getElementById('buttonList'));
        editor.addHtml('<img src="https://pic3.zhimg.com/462e6b7b95adbff825829b442a34b992_im.jpg">')
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
