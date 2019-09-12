import api from "./api";
import filter from "./filterProduct"
import cart from "./cart"
import { setCategories as  setCategoriesAction} from "./api";
import { setProdusts as  setProdustsAction} from "./api";
import { setFilterId as  setFilterIdAction} from "./filterProduct";
import { addToCart as  addToCartAction} from "./cart";

export default {api,filter,cart} 
export const setCategories = setCategoriesAction;
export const setProdusts = setProdustsAction;
export const setFilterId = setFilterIdAction;
export const addToCart = addToCartAction;
