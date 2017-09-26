import ButtonEventConfig from "./ButtonEventConfig";

class ButtonListRegister {

    leiEditor;
    buttonEventConfig;
    constructor(editor,buttonContainer) {
        this.leiEditor = editor;
        this.buttonEventConfig = new ButtonEventConfig(this.leiEditor);
        
        const buttonEventList = this.buttonEventConfig.getButtonList();
        for (let i = 0; i < buttonEventList.length; i++) {
            let item = buttonEventList[i];
            const button = document.createElement('button');
            button.innerHTML = item.text;
            button.onclick = item.event;
            buttonContainer.appendChild(button);
        }
    }
}
export default ButtonListRegister;