// import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Product } from '../product.model';

export const selectProducts = createFeatureSelector<ReadonlyArray<Product>>('products');

export const selectCart = createFeatureSelector<ReadonlyArray<Product>>('cart');

export const selectCartTotal = createSelector(selectCart, (cart) =>
  cart.reduce((total, product) => total + product.price * product.quantity, 0)
);

