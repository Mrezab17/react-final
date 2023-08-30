import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartIcon = ({ onClick }) => {
  const total = 1000;
  return (
    <>
      <div
        className="sm:w-1/3 md:w-1/4 h-full flex-row sm:px-2  float-left space-x-3 border-b-2 border-lime-400 cursor-pointer "
        onClick={onClick}
      >
        <div className="text-xl md:text-3xl float-left w-10 h-full py-1 text-lime-400 felx items-center justify-center text-center ">
          <FontAwesomeIcon icon={faCartShopping} className="" />
        </div>
        <div className="text-sm md:text-base float-left py-2 text-secondary felx items-center justify-center text-center">{`مجموع خرید : ${total}`}</div>
      </div>
    </>
  );
};

export default CartIcon;
