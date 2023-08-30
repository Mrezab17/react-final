import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../store/productsActions";
import { useEffect } from "react";
import SliderBanner from "../components/SliderBanner";

const Home = () => {
  const isFetched = useSelector((state) => state.products.isFetched);
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isFetched) dispatch(fetchProductsData());
  }, [dispatch, isFetched]);

  return (
    <>
      <div className=" bg-primary h-screen w-screen overflow-x-hidden">
        <SliderBanner products={products} />
      </div>
    </>
  );
};

export default Home;
