import {USER_ACTION_TYPES} from "./categories.type.ts";
export const setCategoriesMapAction = (categoryMap) => ({type:USER_ACTION_TYPES.SET_CATEGORIES_MAP, payload:categoryMap});
