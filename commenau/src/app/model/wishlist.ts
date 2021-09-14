import { Product } from "./product";

export class Wishlist {
  id!:String;
  userId!: String;
  listWish!: Array<Product>;
  constructor() { }
}
