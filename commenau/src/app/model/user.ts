import { Product } from "./product";

export class User {
  id!: string;
  name!: string;
  email!: string;
  phone!: string;
  address!: string;
  password!: string;
  urlImg!:string;
  listWishList!: Array<Product>;
  constructor() {

  }

}
