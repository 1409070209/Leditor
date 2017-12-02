import {addClassName, haveClassName, removeClassName, strToElement} from "../../Util/domUtil";

class Image {
    _button;
    _editor;
    _template = '<div><li><button><i class="icon-font icon-image"></i></button></li><div class="lei-hidden lei-upload"><input type="file" name="file" accept="image/jpg,image/jpeg,image/png,image/gif,image/bmp"><i class="icon-font icon-upload"></i></div></li></div>';
    _showButton;
    _upload;
    _input;

    _imgPrefix = 'http://localhost:8090/image/';
    constructor(editor) {
        this._editor = editor;
    }
    eventListen() {

    }
    render(element) {
        this._button = strToElement(this._template)[0];
        this._showButton = this._button.querySelectorAll('button')[0];
        this._upload = this._button.querySelector('.lei-upload');
        this._input = this._upload.querySelector('input');
        this._input.onchange = (e) =>{
            //使用Form表单绕过File对象直接使用FormData上传
            //TODO 上传文件存在严重的兼容问题。
            const form = this._editor.getDocument().createElement('form');
            form.appendChild(this._input.cloneNode(true));
            const fd = new FormData(form);

            e.target.value = '';
            window.fetch('http://localhost:8089/upload/file',{
                method: 'POST',
                body: fd
            }).then((r)=>{
                return r.json();
            }).then((json)=>{
                console.log(json);
                addClassName(this._upload , 'lei-hidden');
                const img = this._editor.getDocument().createElement('img');
                const div = this._editor.getDocument().createElement('div');
                img.src = this._imgPrefix+json.data;
                img.alt = '图片加载失败';
                div.appendChild(img);
                this._editor.execCommand('insertHTML' , div.outerHTML);

            });
        };
        this._showButton.onclick = (e) => {
            if (haveClassName(this._upload , 'lei-hidden')) {
                removeClassName(this._upload , 'lei-hidden');
            } else {
                addClassName(this._upload , 'lei-hidden')
            }
        };
        element.appendChild(this._button);
    }
}

export default Image;