import React, { useEffect } from "react";
import style from "../css/Product.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { NavLink } from "react-router-dom";
import { GetAllProduct } from "../service/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "../service/url";
import Loader from "../components/loader";
const Product = () => {
  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: GetAllProduct,
  });

  useEffect(() => {
    // Invalidate the 'products' query to refetch data on mount/refresh
    queryClient.invalidateQueries("products");
  }, [queryClient]);

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data.data.products);

  return (
    <>
      <div className={style.Container}>
        <div className={style.Logo}>
          <LazyLoadImage
            src="https://ucarecdn.com/246da399-9e7e-4d71-ab88-e3f3640bd217/-/preview/100x100/"
            effect="blur"
            alt="Logo"
          />
          <h1>Bio Pharm</h1>
        </div>

        <div className={style.Products}>
          {data.data.products.map((pro) => (
            <NavLink
              to={`/product/${pro._id}`}
              className={style.ProductItems}
              key={pro._id}
            >
              <div className={style.Discount}>
                <p>Chegirma</p>
                <p>- {pro.discount}%</p>
              </div>
              <div className={style.ProductImage}>
                <LazyLoadImage
                  src={`${BASE_URL}/${pro.image[0]}`}
                  effect="blur"
                  alt="Maxsulot Rasmi"
                />
              </div>
              <div className={style.ProductName}>
                <h3>{pro.name}</h3>
              </div>
              <div className="Description">
                <p>{pro.description}</p>
              </div>
              <div>
                <p className={style.SoldOutText}>
                  bugunning o'zida{" "}
                  <span className={style.SoldOut}>{pro.soldOut}</span> kishi
                  xarid qildi
                </p>
              </div>
              <div>
                <button className={style.NavigateButton}>
                  Chegirmani Qo'lga Kiriting
                </button>
              </div>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Animation */}
      <div>
        <div className={style.wave}></div>
        <div className={style.wave}></div>
        <div className={style.wave}></div>
      </div>
    </>
  );
};

export default Product;
