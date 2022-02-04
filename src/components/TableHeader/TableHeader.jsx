import { useDispatch } from 'react-redux';

import { changeTableSortBy } from '../../redux/item-table/item-table.actions';

import './TableHeader.scss';

const TABLE_COLUMNS = [
  { displayName: 'Name', value: 'name' },
  { displayName: 'Days to Sell', value: 'sell_in' },
  { displayName: 'Value', value: 'value' },
];

const TableHeader = () => {
  const dispatch = useDispatch();

  const handleHeaderClick = (sortBy) => {
    dispatch(changeTableSortBy(sortBy));
  };

  return (
    <thead>
      <tr>
        {TABLE_COLUMNS.map((column) => (
          <th
            key={column.value}
            onClick={() => handleHeaderClick(column.value)}
          >
            {column.displayName}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
