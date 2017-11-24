import Command from "./Command/Command";

class LeiEditor {
    _editor;
    _command;
    create(editor) {
        const editorTitle = document.createElement('title');
        editorTitle.innerHTML = 'LEditor 雷屌出品';
        this._editor = editor;
        const editorHead = this.getHead();
        editorHead.appendChild(editorTitle);

        this._command = new Command(this);
        // this.execCommand('styleWithCSS', false);
        this.getDocument().designMode = 'on';
        this.getDocument().contentEditable = true;
    }
    constructor(editor) {
        this.create(editor);
        //让编辑器获取焦点
        this.getBody().focus();
        this.getBody().innerHTML = '<p><br></p>';
        this.configEventListener('keyup',(e)=>{
            if (e.keyCode === 13) {
                this.execCommand('insertHTML' , '<p><br></p>');
            }
        })
    }
    getBody () {
        return this._editor.contentWindow.document.body;
    }
    getHead(){
        return this._editor.contentWindow.document.head;
    }
    getDocument(){
        return this._editor.contentWindow.document;
    }
    getSelection() {
        return this.getDocument().selection || this._editor.contentWindow.getSelection();
    }
    getRange(){
        if (this.getDocument().selection && this.getDocument().selection.type !== 'Control') {
            return this.getDocument().selection.createRange();
        }else {
            return this.getSelection().getRangeAt(0);
        }
    }
    configEventListener(type , event , flag = false) {
        this.getBody().addEventListener(type , event , flag);
    }

    execCommand(type , param = null) {
        // 下面这行注释是低配版本的命令，现在已经引入了重写后的command，兼容性更强，功能更多
        // this._editor.getDocument().execCommand(type , false , param);
        this._command.execCommand(type , param);
    }
}

export default LeiEditor;