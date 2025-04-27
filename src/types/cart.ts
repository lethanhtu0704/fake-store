
export type CartItemModel = {
  id: string,
  item: number,
  color:string,
  image : string,
  name:string,
  price:number,
  max:number
}

export type CartModel = {
  cart: CartItemModel[],
  total__item: number,
  total__amount: number,
  shippingFee: number,
}
