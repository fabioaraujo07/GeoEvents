export class Local{
    _id : String;
    name: String;
    description: String;
    localType: String;
    capacity: Number;
    country: String;
    city: String;
    address: String;

    constructor(_id:string, name:string, description:string, localType:string, capacity:number, country:string, city:string, address:string){
        this._id = _id;
        this.name = name;
        this.description = description;
        this.localType = localType;
        this.capacity = capacity;
        this.country = country;
        this.city = city;
        this.address = address;
    }
}