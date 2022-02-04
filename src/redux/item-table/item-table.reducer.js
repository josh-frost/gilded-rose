import { ITEM_TABLE_DATA } from './item-table.data';
import ItemTableActionTypes from './item-table.types';

const INITIAL_STATE = {
  items: ITEM_TABLE_DATA,
  displayAddItemModal: false,
  sortBy: 'name',
};

export const itemTableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ItemTableActionTypes.CHANGE_TABLE_SORT:
      return {
        ...state,
        sortBy: action.payload,
      };

    case ItemTableActionTypes.ITEM_ADDED_TO_TABLE:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case ItemTableActionTypes.TOGGLE_ADD_ITEM_MODAL:
      return {
        ...state,
        displayAddItemModal: !state.displayAddItemModal,
      };

    default:
      return state;
  }
};
