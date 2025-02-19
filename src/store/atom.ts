import { atomWithStorage } from "jotai/utils";
import {  CartItemQuantity } from "../types";

// Define cart atom with type safety
export const cartAtom = atomWithStorage<CartItemQuantity[]>("cart", []);
