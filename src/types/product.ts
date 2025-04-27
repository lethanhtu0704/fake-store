export interface ProductModel {
  id: string,
  name: string,
  price: number,
  description: string,
  category: string,
  shipping: boolean,
  company: string,
  stock: number,
  image?: string,
  images?: [],
  stars: number,
  reviews: string,
  colors: string[],
}

export interface ImageModel {
  id: string
  width: number
  height: number
  url: string
  filename: string
  size: number
  thumbnails: {
    small: {
      url: string
      width: string
      height: string
    }
    large: {
      url: string
      width: string
      height: string
    }
    full: {
      url: string
      width: string
      height: string
    }
  }
}

export type ErrorModel = string | undefined

export class ProductsState {
  all__products: ProductModel[]
  filtered__products: ProductModel[]
  view__type: boolean
  product:ProductModel
  sort: string
  filter: {
    name: string
    category: string
    company: string
    color: string
    min__price: number
    max__price: number
    price: number
    free__shipping: boolean
  }
  constructor() {
    this.all__products = []
    this.filtered__products = []
    this.product = {  id: '',
      name: '',
      price: 0,
      description: '',
      category: '',
      image: '',
      shipping: true,
      company: '',
      stock: 0,
      stars: 0,
      reviews: '',
      colors: []}
    this.view__type = true // Default view type
    this.sort = 'default' // Default sorting method
    this.filter = {
      name: '',
      category: '',
      company: '',
      color: '',
      min__price: 0,
      max__price: 0,
      price: 0,
      free__shipping: false
    }
  }
}
