import React, { Component } from 'react';
import LeiEditor from "./LEditor/LeiEditor";
import ButtonListRegister from "./LEditor/ButtonListRegister";
import {strToHtmlElements} from "./LEditor/util/FunctionUtils";


class App extends Component {
    componentDidMount(){
        let editor = new LeiEditor(document.getElementById('editor'));
        let element = '<h1>hello world</h1><div>Excalibur</div>';
        element = strToHtmlElements(element);
        for (let i = 0; i < element.length; i++) {
            editor.addHtml(element[i]);
        }

        new ButtonListRegister(editor,document.getElementById('buttonList'));
    }
    render() {
        return (
            <div className="App" style={{textAlign:"center",width:600,margin:'0 auto'}}>
                <div id="buttonList" style={{width:'100%',background: '#F1F1F1',textAlign:'left'}}> </div>
                <iframe id="editor" title='LeiEditor' style={{width:'100%',height:600}}> </iframe>

            </div>
        );
    }
}

export default App;
