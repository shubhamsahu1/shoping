import api from "./api";
import filter from "./filterProduct"
import { setCategories as  setCategoriesAction} from "./api";
import { setProdusts as  setProdustsAction} from "./api";
import { setFilterId as  setFilterIdAction} from "./filterProduct";

export default {api,filter} 
export const setCategories = setCategoriesAction;
export const setProdusts = setProdustsAction;
export const setFilterId = setFilterIdAction;
