import ItemTableActionTypes from './item-table.types';

export const changeTableSortBy = (sortBy) => ({
  type: ItemTableActionTypes.CHANGE_TABLE_SORT,
  payload: sortBy,
});

export const addItem = (item) => ({
  type: ItemTableActionTypes.ITEM_ADDED_TO_TABLE,
  payload: item,
});
