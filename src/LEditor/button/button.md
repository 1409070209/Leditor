注册一个按钮所必须满足的接口规范
leiEditor：LeiEditor
leiDocument: HtmlDocument
html:string #可选,html的代码
event()：void  button点击后的事件
    return{
        null
    }
configEvent():Object #可选，注册监听事件
    return {
        {
            type: 'click' #click监听
            event: function
        }
    }
addInContainer(buttonContainer:HtmlElement):void #必选，将html属性所保存的HTML代码加入到button容器中