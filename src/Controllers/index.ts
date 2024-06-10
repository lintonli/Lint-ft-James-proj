import { IProduct, TypedBody } from "../Models/product";
import { Request, Response } from "express";
const products: IProduct[] = [];

export function getProducts(req: Request, res: Response) {
  res.status(200).json(products);
}
export function addProduct(req: TypedBody, res: Response) {
  const { name, description, Stock } = req.body;
  let newProduct: IProduct = {
    id: Math.floor(Math.random() * 100000),
    name,
    description,
    Stock,
  };
  products.push(newProduct);
  res.status(201).json({ message: "Product added successfully" });
}

export function getProduct(req: Request<{ id: string }>, res: Response) {
  const id = +req.params.id;

  const product = products.find((x) => x.id === id);
  if (product != undefined) {
    return res.status(200).json(product);
  }
  return res.status(404).json({ message: "Product not found" });
}
export function updateProduct(req: Request<{ id: string }>, res: Response) {
  const id = +req.params.id;
  const product = products.find((x) => x.id === id);
  if (product != undefined) {
    return res
      .status(200)
      .json({ message: `Product ${product.name} updated successfully` });
  }
  return res.status(404).json({ message: "Product not found" });
}
export function deleteProduct(req: Request<{ id: string }>, res: Response) {
  const id = +req.params.id;
  const index = products.findIndex((x) => x.id === id);
  if (index >= 0) {
    products.splice(index, 1);
    return res.status(200).json({ message: `Product  ${id} deleted` });
  }
  return res.status(404).json({ message: "Product not found" });
}
