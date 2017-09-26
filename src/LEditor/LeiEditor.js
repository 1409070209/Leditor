
class Editor {
    editorHead;
    editorBody;
    editorWindow;
    constructor(editor) {
        const editorTitle = document.createElement('title');
        editorTitle.innerHTML = 'LEditor 雷屌出品';
        this.editorHead = editor.contentWindow.document.head;
        this.editorBody = editor.contentWindow.document.body;
        this.editorWindow = editor.contentWindow.window;
        this.editorHead.appendChild(editorTitle);
        this.editorBody.contentEditable = true;
    }
    getHtml() {
        return this.editorBody.innerHTML;
    }
    setHtml(str){
        this.editorBody.innerHTML = str;
    }
    getText() {
        return this.editorBody.innerText;
    }
    getSelection() {
        return this.editorWindow.getSelection().getRangeAt(0);
    }
    getFocusNode(){
        const focusNode = this.editorWindow.getSelection().focusNode;
        return focusNode.parentNode;
    }
    deleteFocusNode() {
        const focusNode = this.getFocusNode();
        console.log(focusNode.tagName);
        if (focusNode.tagName !== 'BODY') {
            focusNode.parentNode.removeChild(focusNode);
        }
    }
    deleteSelectNode() {
        this.editorWindow.getSelection().deleteFromDocument();
    }
}

export default Editor;