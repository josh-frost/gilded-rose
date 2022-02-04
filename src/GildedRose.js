import { useDispatch, useSelector } from 'react-redux';

import AddItemModal from './components/AddItemModal/AddItemModal';
import Table from './components/Table/Table';
import { toggleAddItemModal } from './redux/item-table/item-table.actions';

import './GildedRose.scss';

function GildedRose() {
  const dispatch = useDispatch();

  const displayAddItemModal = useSelector(
    (state) => state.table.displayAddItemModal
  );

  const handleAddItemClick = () => {
    dispatch(toggleAddItemModal());
  };

  return (
    <div className="gilded-rose">
      <h1 className="title-container">GILDED ROSE</h1>
      <Table />
      <div className="button-container">
        <button className="add-item" onClick={handleAddItemClick}>
          + Add Item
        </button>
        <button className="progress-day">Progress a Day</button>
      </div>
      {displayAddItemModal && <AddItemModal />}
    </div>
  );
}

export default GildedRose;
