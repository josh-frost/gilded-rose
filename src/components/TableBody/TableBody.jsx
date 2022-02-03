import { useSelector } from 'react-redux';

import { selectSortedTableItems } from '../../redux/item-table/item-table.selectors';
import TableRow from '../TableRow/TableRow';

import './TableBody.scss';

const TableBody = () => {
  const items = useSelector(selectSortedTableItems);

  return (
    <tbody>
      {items.map((item, index) => (
        <TableRow item={item} key={index} />
      ))}
    </tbody>
  );
};

export default TableBody;
