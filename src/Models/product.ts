import { Request } from "express";
export interface IProduct {
  id: number;
  name: string;
  description: string;
  Stock: string;
}

export interface AddProduct {
  name: string;
  description: string;
  Stock: string;
}

export interface TypedBody extends Request {
  body: AddProduct;
}
