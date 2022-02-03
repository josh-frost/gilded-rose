import sort from 'lodash.sortby';
import { createSelector } from 'reselect';

const selectTable = (state) => state.table;

export const selectTableItems = createSelector(
  [selectTable],
  (table) => table.items
);

export const selectTableSortedBy = createSelector(
  [selectTable],
  (table) => table.sortBy
);

export const selectSortedTableItems = createSelector(
  [selectTableItems, selectTableSortedBy],
  (tableItems, sortBy) => {
    console.log(sortBy);
    return sort(tableItems, [sortBy]);
  }
);
