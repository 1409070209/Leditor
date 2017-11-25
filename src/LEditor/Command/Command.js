/*
 *  TODO 重写撤销，返回，insertHTML三个函数
 */
import History from "./History/History";
import Insert from "./Insert/Insert";

class Command {
    _editor;
    //已经重写的命令列表
    _commandList = [];
    //保存执行命令的前置函数列表
    _commandBefore = [];

    constructor(editor) {
        this._editor = editor;
        this.createBefore();
    }
    createBefore() {
        // 将已经重写的命令注入进来
        // 实现的undo和redo还不如原生的呢
        // this._commandList.push(...new History(this._editor , this).configCommand());
        this._commandList.push(...new Insert(this._editor , this).configCommand());
    }
    configCommandBefore(event) {
        //为command类推入Before的监听函数，这个监听函数必须是无副作用的。
        this._commandBefore.push(event);
    }
    execBefore(type , param) {
        //执行Before监听函数
        this._commandBefore.forEach(item =>{
            item(type , param);
        })
    }
    queryCommandSupported(type) {
        return this._editor.getDocument().queryCommandSupported(type);
    }
    exec(type , param) {
        this._editor.getDocument().execCommand(type , false , param);
    }
    execCommand(type , param){
        this.execBefore(type , param);
        console.log(this.queryCommandSupported(type) , type);
        if (this.queryCommandSupported(type)) {
            return this.exec(type , param)
        }
        this._commandList.forEach((item)=>{
            if (item.type === type) {
                return item.event(param);
            }
        });
        return this.exec(type , param)
    }
}

export default Command;