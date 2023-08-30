import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../store/productsActions";
import { useEffect } from "react";

const Home = () => {
  const isFetched = useSelector((state) => state.products.isFetched);
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isFetched) dispatch(fetchProductsData());
  }, [dispatch, isFetched]);

  return (
    <>
      <div className="h-full bg-primary"></div>
    </>
  );
};

export default Home;
