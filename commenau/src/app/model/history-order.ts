import { ProductCart } from "./product-cart";

export class HistoryOrder {
    id!: string;
    userId!:string;
    date!:string;
    total!:number;
    discount!:number;
    listOrder!:Array<ProductCart>;
    constructor(){}
}
