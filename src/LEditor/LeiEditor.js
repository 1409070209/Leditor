
import {createEditorException, deleteNodeException} from "./Exception/EditorException";
import {htmlElementsToStr, isHtmlElement} from "./util/FunctionUtils";
import {paramTypeException} from "./Exception/UtilException";

class LeiEditor {
    editorBody;
    editorWindow;
    editorDocument;
    create(editor){
        const editorTitle = document.createElement('title');
        editorTitle.innerHTML = 'LEditor 雷屌出品';
        this.editorDocument = editor.contentWindow.document;
        this.editorHead = editor.contentWindow.document.head;
        this.editorBody = editor.contentWindow.document.body;
        this.editorWindow = editor.contentWindow.window;
        this.editorHead.appendChild(editorTitle);
        this.editorBody.contentEditable = true;
    }
    constructor(editor) {
        if (editor.tagName !== 'IFRAME') {
            throw createEditorException(editor.tagName)
        }
        this.create(editor);

        //让编辑器获得焦点
        this.editorBody.focus();
    }
    getHtml() {
        return this.editorBody.innerHTML;
    }
    addHtml(param) {
        let paramType = typeof param;
        paramType = isHtmlElement(param) ? 'htmlElement' : paramType;
        if (paramType !== 'string' && paramType !== 'htmlElement') {
            throw paramTypeException(paramType , 'htmlElement or string');
        }
        const flag = isHtmlElement(param);
        if (flag) {
            this.editorBody.innerHTML += htmlElementsToStr(param);
        } else {
            this.editorBody.innerHTML += param
        }
        // this.editorBody.focus();
    }
    setHtml(htmlElement) {
        this.editorBody.innerHTML = '';
        this.addHtml(htmlElement);
    }
    getText() {
        return this.editorBody.innerText;
    }
    getDocument() {
        return this.editorDocument;
    }
    getBody() {
        return this.editorBody;
    }
    getSelection() {
        if (this.editorDocument.getSelection) {
            return this.editorDocument.getSelection();
        } else {
            return this.editorDocument.selection;
        }
    }
    getFocusNode(){
        const focusNode = this.getSelection().focusNode;
        return focusNode.parentNode;
    }
    insertNode(node) {
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