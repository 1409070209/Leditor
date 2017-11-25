
class Insert {
    _editor;
    _command;

    constructor(editor , command){
        this._editor = editor;
        this._command = command;
    }
    configCommand(){
        return [
            {
                type: 'insertHTML',
                event: this.insertHtml.bind(this)
            }

        ]
    }
    insertHtml(param){
        const range = this._editor.getRange();
        range.deleteContents();
        if (range.insertNode) {
            //如果在这个位置使用document创建div，IE会因为document的不同出现插入异常。
            const div = this._editor.getDocument().createElement('div');
            div.innerHTML = param;
            range.insertNode(div.children[0]);
        } else {
            range.pasteHTML(param);
        }
    }
}

export default Insert;