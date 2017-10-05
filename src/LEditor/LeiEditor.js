
import {createEditorException, deleteNodeException} from "./Exception/EditorException";
import {htmlElementsToStr, isHtmlElement} from "./util/FunctionUtils";
import {paramTypeException} from "./Exception/UtilException";

class LeiEditor {
    _editorBody;
    _editorWindow;
    _editorDocument;
    create(editor) {
        const editorTitle = document.createElement('title');
        editorTitle.innerHTML = 'LEditor 雷屌出品';
        this._editorDocument = editor.contentWindow.document;
        this.editorHead = editor.contentWindow.document.head;
        this._editorBody = editor.contentWindow.document.body;
        this._editorWindow = editor.contentWindow.window;
        this.editorHead.appendChild(editorTitle);
        this._editorBody.contentEditable = true;
    }
    constructor(editor) {
        if (editor.tagName !== 'IFRAME') {
            throw createEditorException(editor.tagName)
        }
        this.create(editor);

        //让编辑器获得焦点
        this._editorBody.focus();
    }
    getHtml() {
        return this._editorBody.innerHTML;
    }
    addHtml(param) {
        let paramType = typeof param;
        paramType = isHtmlElement(param) ? 'htmlElement' : paramType;
        if (paramType !== 'string' && paramType !== 'htmlElement') {
            throw paramTypeException(paramType , 'htmlElement or string');
        }
        const flag = isHtmlElement(param);
        if (flag) {
            this._editorBody.innerHTML += htmlElementsToStr(param);
        } else {
            this._editorBody.innerHTML += param
        }
        // this._editorBody.focus();
    }
    setHtml(htmlElement) {
        this._editorBody.innerHTML = '';
        this.addHtml(htmlElement);
    }
    getText() {
        return this._editorBody.innerText;
    }
    getDocument() {
        return this._editorDocument;
    }
    getBody() {
        return this._editorBody;
    }
    getSelection() {
        if (this._editorDocument.getSelection) {
            return this._editorDocument.getSelection();
        } else {
            return this._editorDocument.selection;
        }
    }
    getFocusNode(){
        const focusNode = this.getSelection().focusNode;
        return focusNode.parentNode;
    }
    insertNode(node) {
        console.log(node);
        const select = this.getSelection();
        this.deleteSelectNode();
        const range = select.getRangeAt(0);
        range.insertNode(node);
        const nextRange = range.cloneRange();
        nextRange.setStart(node,0);
        nextRange.setEnd(node,0);
        select.removeAllRanges();
        select.addRange(nextRange);
        return true;
    }
    deleteFocusNode() {
        const focusNode = this.getFocusNode();
        if (focusNode.tagName === 'BODY' || focusNode.tagName === 'HTML') {
            throw deleteNodeException(focusNode.tagName);
        } else {
            focusNode.parentNode.removeChild(focusNode);
        }
    }
    deleteSelectNode() {
        this.getSelection().deleteFromDocument();
    }
}

export default LeiEditor;