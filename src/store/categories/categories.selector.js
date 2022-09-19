import { createSelector } from "reselect";

const selectCategoryReducer = state => state.categories;

export const categoriesMapSelector = createSelector(
    [selectCategoryReducer],
    categories => categories
)
