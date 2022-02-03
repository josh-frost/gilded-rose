import TableCell from '../TableCell/TableCell';

import './TableRow.scss';

const TableRow = ({ item, ...props }) => {
  return (
    <tr>
      {Object.entries(item).map(([key, value]) => (
        <TableCell key={props.key + key} data={value} />
      ))}
    </tr>
  );
};

export default TableRow;
