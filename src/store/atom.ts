import { atomWithStorage } from "jotai/utils";
import { CartItem } from "../types";

// Define cart atom with type safety
export const cartAtom = atomWithStorage<CartItem[]>("cart", []);
