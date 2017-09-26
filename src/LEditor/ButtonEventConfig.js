
class ButtonEventConfig{

    leiEditor;
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
        }
    ];
    constructor(editor) {
        this.leiEditor = editor;
    }
    getButtonList() {
        return this.buttonEventList;
    }
}
export default ButtonEventConfig;
