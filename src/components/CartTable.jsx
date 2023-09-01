import { useTable } from "react-table";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addToCart, updateTotal, removeFromCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
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
    Header: "تعداد",
    accessor: "count",
  },
];
const CartTable = ({ cart }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = cart.map((item) => {
    return {
      name: item.name,
      category: item.category,
      price: item.price,
      count: item.count,
    };
  });
  console.log(data);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <div className="h-full flex flex-col items-center space-y-3">
      <table
        {...getTableProps()}
        className="w-full md:w-9/12 h-2/3  pr-8 mt-20 bg-black rounded-xl"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.getHeaderGroupProps().key}
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.getHeaderProps().key}
                  className="w-1/5 text-sky-500 text-center h-10 "
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="h-full overflow-scroll">
          {rows.map((row) => {
            prepareRow(row);

            return (
              <tr
                {...row.getRowProps()}
                key={row.getRowProps().key}
                className="h-10"
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      key={cell.getCellProps().key}
                      className="w-1/5 text-secondary text-center  "
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
                <td className=" w-8  text-3xl text-center  text-lime-400">
                  <FontAwesomeIcon
                    icon={faPlusCircle}
                    onClick={() => {
                      dispatch(addToCart({ ...row.original, id: row.id }));
                      dispatch(updateTotal());
                    }}
                    className="cursor-pointer"
                  />
                </td>
                <td className=" w-8  text-3xl text-center  text-red-600">
                  <FontAwesomeIcon
                    icon={faMinusCircle}
                    onClick={() => {
                      dispatch(removeFromCart(row.id));
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
      <button
        onClick={() => {
          navigate("/checkout");
        }}
        className="text-green-800 bg-white hover:bg-green-600 hover:text-white hover:w-28 transition-all duration-500 rounded h-12 w-24"
      >
        ثبت خرید
      </button>
    </div>
  );
};

export default CartTable;
