class EventListenImpl {
    //公有属性
    type;
    event;

    constructor(type, event) {
        this.type = type;
        this.event = event;
    }
}

export default EventListenImpl