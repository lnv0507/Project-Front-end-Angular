export class ProductCart {
    id!: number;
    name!: String;
    price!: number;
    img!: String;
    quatity!: number;
    constructor(id: number, name: String, price: number, img: String){
        this.quatity = 1;
        this.name = name;
        this.id =id;
        this.img =img;
        this.price =price;
    }
  
}
