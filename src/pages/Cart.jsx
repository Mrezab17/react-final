import { useSelector } from "react-redux";
import CartTable from "../components/CartTable";
import EmptyCart from "../components/EmpyCart";

const Cart = () => {
  const cart = useSelector((state) => state.shoppingCart.items);
  return (
    <>
      <div className=" bg-primary h-screen w-screen overflow-x-hidden">
        {cart.length > 0 ? <CartTable cart={cart} /> : <EmptyCart />}
      </div>
    </>
  );
};

export default Cart;
