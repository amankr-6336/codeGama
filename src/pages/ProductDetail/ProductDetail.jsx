import React, { useEffect } from "react";
import "./ProductDetail.css";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";
import Loading from "../../components/loading/Loading.jsx";
import Error from "../../components/error/Error.jsx";
import "./ProductDetail.css";
import RatingComponent from "../../components/ratingComponent/RatingComponent.jsx";
import QuantityControl from "../../components/quantityControl/QuantityControl.jsx";

function ProductDetail() {
  const params = useParams();

  const { data, loading, error } = useFetch(`/products/${params.id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    return <Error message={error.message} />;
  }

  return (
    <>
      <div className="product-detail">
        {data && (
          <>
            <div className="product-detail-image">
              <img src={data?.image} alt="" />
            </div>
            <div className="product-detail-info">
              <div className="product-title">
                <h2>{data?.title}</h2>
              </div>
              <div className="product-description">
                <p>{data?.description}</p>
              </div>
              <div className="product-rating">
                <RatingComponent rating={data?.rating} />
              </div>
              <div className="product-price">
                <h4> $ {data?.price}</h4>
              </div>

              <div className="product-add">
                <QuantityControl Item={data} />
              </div>
            </div>
          </>
        )}
      </div>
      {loading && <Loading />}
    </>
  );
}

export default ProductDetail;
