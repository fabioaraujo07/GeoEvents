export class Ticket{
    _id : String;
    name: String;
    local: String;
    event: String;
    price: number;

    constructor(_id:string, name:string, local:string, event:string, price:number){
        this._id = _id;
        this.name = name;
        this.local = local;
        this.event = event;
        this.price = price;
    }
}