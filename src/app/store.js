import { configureStore } from "@reduxjs/toolkit";
import productsRender from '../features/products/ProductsRender'
import authReduser from '../features/auth/authSlice'

export const store = configureStore({
    reducer:{
        products: productsRender,
        auth: authReduser
    }
})