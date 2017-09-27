
class ButtonEventConfig{

    leiEditor;
    document;
    buttonEventList = [
        {
            text: 'getHtml',
            event: () => {
                console.log(this.leiEditor.getHtml());
                return this.leiEditor.getHtml();
            }
        },
        {
            text: 'getText',
            event: () => {
                console.log(this.leiEditor.getText());
                return this.leiEditor.getText();
            }
        },
        {
            text: 'getSelect',
            event: () => {
                console.log(this.leiEditor.getSelection());
                return this.leiEditor.getSelection();
            }
        },
        {
            text: 'getFocusNode',
            event: () => {
                console.log(this.leiEditor.getFocusNode());
                return this.leiEditor.getFocusNode();
            }
        },
        {
            text: 'deleteSelectNode',
            event: () => {
                this.leiEditor.deleteSelectNode();
            }
        },
        {
            text: 'deleteFocusNode',
            event: () => {
                this.leiEditor.deleteFocusNode();
            }
        },
        {
            text: 'bold',
            event: () => {
                this.document.execCommand('bold');
            }
        },
        {
            text: 'backColor',
            event: () => {
                this.document.execCommand('BackColor',false,'#333333');
            }
        }
    ];
    constructor(editor) {
        this.leiEditor = editor;
        this.document = this.leiEditor.getDocument();
    }
    getButtonList() {
        return this.buttonEventList;
        // return []
    }
}
export default ButtonEventConfig;
