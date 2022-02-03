import TableBody from '../TableBody/TableBody';
import TableHeader from '../TableHeader/TableHeader';

import './Table.scss';

const Table = () => {
  return (
    <table className="item-table">
      <TableHeader />
      <TableBody />
    </table>
  );
};

export default Table;
