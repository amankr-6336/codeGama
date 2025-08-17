import React, { useEffect, useState } from "react";
import "./ProductListing.css";
import ProductCard from "./ProductCard/ProductCard.jsx";
import Filter from "../../components/filter/Filter.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../store/Slice/ProductListSlice..js";
import useFetch from "../../hooks/useFetch.js";
import Loading from "../../components/loading/Loading.jsx";
import Error from "../../components/error/Error.jsx";

function ProductListing() {
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const productList = useSelector((state) => state.ProductListReducer.products);

  const url = selectedCategory
    ? `/products/category/${selectedCategory}`
    : "/products";

  const { data, loading, error } = useFetch(url);

  console.log(
    "okay i m into it"
  )

  useEffect(() => {
    if (data) {
      dispatch(setProducts(data));
    }
  }, [data, dispatch]);

  function handleSelectCategory(category) {
    setSelectedCategory(category);
  }

  if (error) return <Error message={error.message} />;

  return (
    <>
      <div className="product-listing">
        {data && (
          <>
            <div className="filter">
              <Filter
                selected={selectedCategory}
                onSelect={handleSelectCategory}
              />
            </div>
            <div className="product-list">
              {productList.map((data) => (
                <ProductCard key={data.id} productData={data} />
              ))}
            </div>
          </>
        )}
      </div>

      {loading && <Loading />}
    </>
  );
}

export default ProductListing;
