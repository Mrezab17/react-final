import { useDispatch, useSelector } from "react-redux";
import IranMap from "../components/IranMap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { emptyCart, updateTotal } from "../store/cartSlice";

const Checkout = () => {
  const cart = useSelector((state) => state.shoppingCart.items);
  const total = useSelector((state) => state.shoppingCart.total);
  const dispatch = useDispatch();
  const checkOutSubmit = (data) => {
    if (total == 0) return;
    toast.success(`شهر : ` + data.city);
    toast.success(`استان : ` + data.province);
    toast.success(`مجموع خرید : ` + total);

    dispatch(emptyCart());
    dispatch(updateTotal());
  };

  const checkOutError = (message) => {
    toast.error(message);
  };
  return (
    <>
      <div className=" bg-primary h-screen w-screen overflow-x-hidden flex flex-row space-x-1 items-center">
        <IranMap
          checkoutSubmit={checkOutSubmit}
          checkOutError={checkOutError}
        />
        {/* <CityDropDown checkoutSubmit={checkOutSubmit} /> */}
        <ToastContainer />
      </div>
    </>
  );
};

export default Checkout;
