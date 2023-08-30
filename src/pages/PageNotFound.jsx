import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="h-screen w-screen flex justify-center">
      <div className="w-full h-full z-50 bg-primary text-secondary flex-col px:24 sm:px-48 py-24 space-y-14">
        <div className="w-full text-6xl flex justify-center">
          <h1 className=" ">خطای 404 </h1>
        </div>
        <div className="w-full text-6xl flex justify-center">
          <p>صفحه ی مورد نظر یافت نشد .</p>
        </div>
        <div className="w-full text-6xl flex justify-center">
          <Link to="/" className="text-6xl block text-green-500">
            بازگشت به صفحه ی اصلی
            <FontAwesomeIcon icon={faCircleLeft} />
            {"    "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
