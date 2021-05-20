export class Album{
    public userID : number;
    public id: number;
    public title: string;
    public countImage: number;
    public imageUrl: string;


    constructor(userID: number, id: number, title: string, countImage: number, imageUrl: string){
        this.userID = userID;
        this.id = id;
        this.title = title;
        this.countImage = countImage;
        this.imageUrl = imageUrl;
    }
}