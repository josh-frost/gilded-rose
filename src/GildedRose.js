import Table from './components/Table/Table';

import './GildedRose.scss';

function GildedRose() {
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
