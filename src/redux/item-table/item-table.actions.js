import ItemTableActionTypes from './item-table.types';

export const changeTableSortBy = (sortBy) => ({
  type: ItemTableActionTypes.CHANGE_TABLE_SORT,
  payload: sortBy,
});

export const addItemToTable = (item) => ({
  type: ItemTableActionTypes.ITEM_ADDED_TO_TABLE,
  payload: item,
});

export const toggleAddItemModal = () => ({
  type: ItemTableActionTypes.TOGGLE_ADD_ITEM_MODAL,
});

export const progressItems = () => ({
  type: ItemTableActionTypes.PROGRESS_ITEMS,
});
