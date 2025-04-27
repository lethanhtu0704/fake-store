import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axiosInstance from '../configs/axios'
import { ProductModel, ProductsState } from '../types/product'
import { hideLoading, showLoading } from './StylingSlice'

const initialState: ProductsState = {
  all__products: [],
  filtered__products: [],
  product: {
    id: '',
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
    colors: []
  },
  view__type: true,
  sort: 'lowest',
  filter: {
    name: '',
    category: 'all',
    company: 'all',
    color: 'all',
    min__price: 0,
    max__price: 0,
    price: 0,
    free__shipping: false
  }
}

export const getProducts = createAsyncThunk<ProductModel[], void>('products/getProducts', async (_, thunkAPI) => {
  try {
    thunkAPI.dispatch(showLoading())
    const response = await axiosInstance.get('/products.json')
    thunkAPI.dispatch(hideLoading())
    return response.data
  } catch (error) {
    thunkAPI.dispatch(hideLoading())
    console.error('Error fetching products:', error)
    throw error // Rethrow error to let createAsyncThunk handle it
  }
})

export const getProductDetail = createAsyncThunk<ProductModel, string>(
  'products/getProductDetail',
  async (id, thunkAPI) => {
    try {
      thunkAPI.dispatch(showLoading())
      const response = await axiosInstance.get(`/${id}.json`)
      thunkAPI.dispatch(hideLoading())
      return response.data
    } catch (error) {
      thunkAPI.dispatch(showLoading())
      console.error('Error fetching products:', error)
      throw error // Rethrow error to let createAsyncThunk handle it
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setView: (state) => {
      state.view__type = !state.view__type
    },
    sortProduct: (state, action) => {
      let tempProducts = [...state.filtered__products]
      switch (action.payload) {
        case 'lowest':
          state.filtered__products = tempProducts.sort((a, b) => {
            return a.price - b.price
          })
          break
        case 'highest':
          state.filtered__products = tempProducts.sort((a, b) => {
            return b.price - a.price
          })
          break
        case 'a-z':
          state.filtered__products = tempProducts.sort((a, b) => a.name.localeCompare(b.name))
          break
        case 'z-a':
          state.filtered__products = tempProducts.sort((a, b) => a.name.localeCompare(b.name)).reverse()
          break
        default:
          state.filtered__products = tempProducts
      }
    },
    setSortingOption: (state, action) => {
      state.sort = action.payload
    },
    clearFilter: (state) => {
      state.filter = initialState.filter
      state.filtered__products = state.all__products
    },
    updateFilter: (state, action: { payload: { name: keyof typeof state.filter; value: any } }) => {
      const { name, value } = action.payload
      ;(state.filter[name] as any) = value // Type assertion resolves the error
    },
    filterProducts: (state) => {
      let tempProducts = [...state.all__products]
      const { name, category, free__shipping } = state.filter
      if (name) {
        tempProducts = tempProducts.filter((product) => product.name.toLowerCase().startsWith(name))
      }
      if (category !== 'all') {
        tempProducts = tempProducts.filter((product) => product.category.toLowerCase() === category)
      }

      if (free__shipping) {
        tempProducts = tempProducts.filter((product) => {
          return product.shipping == free__shipping
        })
      }

      state.filtered__products = tempProducts
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action: PayloadAction<ProductModel[]>) => {
      state.all__products = action.payload
    })
    builder.addCase(getProductDetail.fulfilled, (state, action: PayloadAction<ProductModel>) => {
      state.product = action.payload
    })
  }
})

export const { setView, sortProduct, setSortingOption, updateFilter, filterProducts, clearFilter } =
  productsSlice.actions

export default productsSlice.reducer
