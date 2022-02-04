import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  addItemToTable,
  toggleAddItemModal,
} from '../../redux/item-table/item-table.actions';
import TextInput from '../TextInput/TextInput';

import './AddItemModal.scss';

const AddItemModal = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [sellIn, setSellIn] = useState('');
  const [value, setValue] = useState('');

  const handleChange = (event, setter) => {
    const { value } = event.target;
    setter(value);
  };

  const handleCancel = () => {
    dispatch(toggleAddItemModal());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name,
      sellIn,
      value,
    };

    dispatch(addItemToTable(item));
    dispatch(toggleAddItemModal());
  };

  return (
    <div className="modal-container">
      <div className="modal-card">
        <div className="modal-header">ADD ITEM</div>
        <form className="modal-fields" id="item-form" onSubmit={handleSubmit}>
          <TextInput
            name="name"
            value={name}
            onChange={(e) => handleChange(e, setName)}
            label="Name"
            required
          />
          <TextInput
            type="number"
            name="sellIn"
            value={sellIn}
            onChange={(e) => handleChange(e, setSellIn)}
            label="Sell In"
            required
          />
          <TextInput
            type="number"
            name="value"
            value={value}
            onChange={(e) => handleChange(e, setValue)}
            label="Value"
            required
          />
        </form>
        <div className="modal-buttons">
          <button onClick={handleCancel}>Cancel</button>
          <input type="submit" form="item-form" value="Add" />
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
