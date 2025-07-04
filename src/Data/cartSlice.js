import { createSlice } from '@reduxjs/toolkit';

const CART_STORAGE_KEY = 'shopping_cart';

function saveCartToStorage(cartItems) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
}

function loadCartFromStorage() {
  const data = localStorage.getItem(CART_STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

function deleteCartFromStorage() {
  localStorage.removeItem(CART_STORAGE_KEY);
}

const initialState = {
  items: loadCartFromStorage(), // { productId, quantity }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity = 1, size, color } = action.payload;
      // Find item by productId, size, and color
      const existing = state.items.find(item => item.productId === productId && item.size === size && item.color === color);
      if (existing) {
        existing.quantity += quantity;
      } else {
        state.items.push({ productId, quantity, size, color });
      }
      saveCartToStorage(state.items);
    },
    removeFromCart: (state, action) => {
      const { productId, size, color } = action.payload;
      state.items = state.items.filter(item => !(item.productId === productId && item.size === size && item.color === color));
      saveCartToStorage(state.items);
    },
    updateQuantity: (state, action) => {
      const { productId, quantity, size, color } = action.payload;
      const item = state.items.find(item => item.productId === productId && item.size === size && item.color === color);
      if (item && quantity > 0) {
        item.quantity = quantity;
      }
      saveCartToStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToStorage(state.items);
    },
    deleteCartCache: (state) => {
      deleteCartFromStorage();
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, deleteCartCache } = cartSlice.actions;
export default cartSlice.reducer;
