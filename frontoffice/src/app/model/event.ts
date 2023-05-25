export class Event{
    _id : String;
    name: String;
    description: String;
    local: String;
    eventType: String;
    capacity: Number;
    date: Date;

    constructor(_id:string, name:string, description:string, eventType:string, capacity:number, date:Date, local:string){
        this._id = _id;
        this.name = name;
        this.description = description;
        this.local = local;
        this.eventType = eventType;
        this.capacity = capacity;
        this.date = date;
    }
}