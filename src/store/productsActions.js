import { replaceProducts, setFetched } from "./productsSlice";
import { fetchData } from "../api/fetchData";

const baseURL = "https://json.xstack.ir/api/v1/products";

export const fetchProductsData = () => {
  return async (dispatch) => {
    try {
      const fetchedProductsList = await fetchData(baseURL);
      dispatch(
        replaceProducts({
          items: fetchedProductsList || [],
        })
      );
      dispatch(setFetched());
    } catch (error) {
      console.log("Error Fetching at fetchproductsData" + error);
    }
  };
};
