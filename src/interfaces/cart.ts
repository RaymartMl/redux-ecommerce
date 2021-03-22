export interface CartItem {
  productId: string;
  quantity: number;
}

export type CartSliceState = CartItem[];
