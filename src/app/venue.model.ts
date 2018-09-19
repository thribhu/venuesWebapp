export class VenueModel {
    public name: string;
    public url: string;
    public imagePath: string;
    public capacity: number;
    public indoor: string;
    constructor(name: string, url: string, imagePath: string, capacity: number, indoor: string ) {
        this.name = name;
        this.url = url;
        this.imagePath = imagePath;
        this.capacity = capacity;
        this.indoor = indoor;
    }
}
