import './TableCell.scss';

const TableCell = ({ data, ...props }) => {
  return <td className="table-cell">{data}</td>;
};

export default TableCell;
