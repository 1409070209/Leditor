
import Menu from "./button/Menu";

class ButtonListRegister {

    leiEditor;
    constructor(editor,buttonContainer) {
        this.leiEditor = editor;
        const menuList = new Menu(this.leiEditor,this.leiEditor.getDocument()).getButtonList();

        for (let i = 0; i < menuList.length; i++) {
            let item = menuList[i];
            item.addInContainer(buttonContainer);
        }

    }
}
export default ButtonListRegister;