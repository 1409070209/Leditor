class History {
    // TODO 对history队列维护出现BUG。明天解决。
    _editor;
    _command;
    _history = [];
    _maxSize = 2;
    _thisOffset = 0;
    _thisState = 0;
    _inputNum = 0;

    constructor(editor , command) {
        this._editor = editor;
        this._editor.configEventListener('input' , (e)=>{
            this._inputNum += 1;
            console.log('input');
            if (this._inputNum >= 10) {
                this._inputNum = 0;
                console.log(this._history);
                console.log(typeof this._editor.getBody().innerHTML);
                this.push(this._editor.getBody().innerHTML);
            }
        });
        this._command = command;
        this._command.configCommandBefore((type)=>{
            console.log('before');
            console.log(type);
            if (type !== 'undo' && type !== 'redo' && type !== 'outHistory') {
                this.push(this._editor.getBody().innerHTML);
            }
        })
    }
    configCommand() {
        return [
            {
                type: 'undo1',
                event:this.undo.bind(this)
            },
            {
                type: 'redo1',
                event:this.redo.bind(this)
            },
            {
                type: 'outHistory',
                event: ()=>{
                    console.log(this._history);
                }
            }
        ]
    }
    push(innerHTML) {
        console.log('push',innerHTML);
        this._history[this._thisOffset++] = innerHTML;
        this._thisOffset %= this._maxSize;
    }
    undo() {
        console.log(this._history);
        if (this._thisOffset > 0) {
            this._thisOffset = this._thisOffset-1;
        } else {
            this._thisOffset = this._maxSize-1;
        }
        this._editor.getBody().innerHTML = this._history[this._thisOffset];
    }
    redo() {
        console.log(this._history);
        this._thisOffset = (this._thisOffset+1) % this._maxSize;
        this._editor.getBody().innerHTML = this._history[this._thisOffset];
    }
}

export default History;