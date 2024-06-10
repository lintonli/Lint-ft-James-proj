import { Request } from "express";
export interface IProduct {
  id: number;
  name: string;
  description: string;
  stock: string;
}

export interface AddProduct {
  name: string;
  description: string;
  stock: string;
}

export interface TypedBody extends Request {
  body: AddProduct;
}
