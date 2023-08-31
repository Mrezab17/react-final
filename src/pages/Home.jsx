import { useDispatch, useSelector } from "react-redux";
import { fetchProductsData } from "../store/productsActions";
import { useEffect } from "react";
import SliderBanner from "../components/SliderBanner";
import ProductsTable from "../components/ProductsTable";

const Home = () => {
  const isFetched = useSelector((state) => state.products.isFetched);
  const products = useSelector((state) => state.products.items);
  const dispatch = useDispatch();

  //fetch once
  useEffect(() => {
    if (!isFetched) dispatch(fetchProductsData());
  }, [dispatch, isFetched]);

  //set columns for table
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

  return (
    <>
      <div className=" bg-primary h-screen w-screen overflow-x-hidden">
        <SliderBanner products={products} />
        <ProductsTable columns={columns} products={products} />
      </div>
    </>
  );
};

export default Home;
