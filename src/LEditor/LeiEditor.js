

class LeiEditor {
    _editor;

    create(editor) {
        const editorTitle = document.createElement('title');
        editorTitle.innerHTML = 'LEditor 雷屌出品';
        this._editor = editor;
        const editorHead = this.getHead();
        const editorBody = this.getBody();
        editorHead.appendChild(editorTitle);
        editorBody.contentEditable = true;
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
    getSelect(){
        return this._editor.contentWindow.document.getSelection();
    }
    configEventListener(type , event , flag = false) {
        this.getBody().addEventListener(type , event , flag);
    }

    execCommand(type , param = null){
        this.getDocument().execCommand(type ,false ,param);
    }
}

export default LeiEditor;