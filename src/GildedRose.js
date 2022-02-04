import { useDispatch } from 'react-redux';

import Table from './components/Table/Table';
import { addItemToTable } from './redux/item-table/item-table.actions';

import './GildedRose.scss';

function GildedRose() {
  const dispatch = useDispatch();
  return (
    <div className="gilded-rose">
      <h1 className="title-container">GILDED ROSE</h1>
      <Table />
      <div className="button-container">
        <button className="add-item">+ Add Item</button>
        <button className="progress-day">Progress a Day</button>
      </div>
    </div>
  );
}

export default GildedRose;
