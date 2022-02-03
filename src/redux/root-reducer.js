import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { itemTableReducer } from './item-table/item-table.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['table'],
};

const rootReducer = combineReducers({
  table: itemTableReducer,
});

export default persistReducer(persistConfig, rootReducer);
