
import Menu from "./button/Menu";

class ButtonListRegister {

    _leiEditor;
    constructor(editor,buttonContainer) {
        this._leiEditor = editor;
        const menu = new Menu(this._leiEditor,this._leiEditor.getDocument());
        const buttonList = menu.getButtonList();
        const eventListenList = menu.getEventListen();

        for (let i = 0; i < buttonList.length; i++) {
            let item = buttonList[i];
            if(item.configEventListen) {
                item.configEventListen();
            }
            item.addInContainer(buttonContainer);
        }
        this._leiEditor.getBody().onclick = () => {
            for (let i = 0; i < eventListenList.length; i++) {
                let item = eventListenList[i];
                if (item.type === 'click') {
                    item.event();
                }
            }
        }
    }
}
export default ButtonListRegister;