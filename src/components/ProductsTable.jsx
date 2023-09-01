import { useTable, usePagination } from "react-table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart, updateTotal } from "../store/cartSlice";
const columns = [
  {
    Header: "نام",
    accessor: "name",
  },
  {
    Header: "دسته",
    accessor: "category",
  },
  {
    Header: "قیمت",
    accessor: "price",
  },
  {
    Header: "تعداد بازدید",
    accessor: "view",
  },
];
const ProductsTable = ({ products }) => {
  const dispatch = useDispatch();
  const data = products.map((product) => {
    return {
      name: product.name,
      category: product.category.name,
      price: product.price,
      view: product.view,
    };
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <>
      {" "}
      <table
        {...getTableProps()}
        className="max-w-[1400px] h-[580px] w-full m-auto py-16 pr-8 float-right"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              className="w-full"
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.getHeaderGroupProps().key}
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.getHeaderProps().key}
                  className="w-1/5 text-sky-500   text-center h-16"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="space-y-1">
          {rows.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()} key={row.getRowProps().key}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      key={cell.getCellProps().key}
                      className="w-1/5 text-secondary text-center h-16"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
                <td className=" w-8 h-4/5 text-3xl text-center text-lime-400">
                  <FontAwesomeIcon
                    icon={faPlusCircle}
                    onClick={() => {
                      dispatch(addToCart({ ...row.original, id: row.id }));
                      dispatch(updateTotal());
                    }}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ProductsTable;
