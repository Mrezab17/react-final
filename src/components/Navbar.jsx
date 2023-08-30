import { useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-10 sm:h-12 bg-primary space-x-5 fixed ">
      <div className="text-sm md:text-base hidden sm:w-1/6 sm:h-full sm:flex items-center justify-center text-sky-400 float-right text-center ">
        به فروشگاه سمین رای خوش آمدید
      </div>
      <div
        className="text-sm md:text-base w-1/6 h-full flex items-center justify-center text-secondary float-right  hover:text-lime-400  transition-all duration-500 text-center cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        محصولات
      </div>
      <div
        className="text-sm md:text-base w-1/6 h-full flex items-center justify-center text-secondary hover:text-lime-400 float-right    transition-all duration-500 text-center cursor-pointer"
        onClick={() => {
          navigate("/checkout");
        }}
      >
        ثبت خرید
      </div>
      <CartIcon
        onClick={() => {
          navigate("/cart");
        }}
      />
    </div>
  );
};

export default Navbar;
