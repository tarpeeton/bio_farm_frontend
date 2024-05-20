import React, { useState } from "react";
import { getSingleProduct, orderCreate } from "../service/api";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import { useMask } from "@react-input/mask";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import Loader from "../components/loader";
import InfoImage from "./InfoImage"; // Ensure InfoImage is the default export if using default export
import style from "../css/Item.module.css";
import { BASE_URL } from "../service/url";
import SuccessMessage from "./SuccessMessage"
const ProductItem = () => {
  const location = useLocation();
  const productId = location.pathname.split("/").pop();

  const { isLoading, error, data } = useQuery({
    queryKey: ["singleProduct", productId],
    queryFn: () => getSingleProduct(productId),
  });

  const inputRef = useMask({
    mask: "+998 (__) ___-__-__",
    replacement: { _: /\d/ },
  });

  const [phone, setPhone] = useState("");
  const [username, setUser] = useState("");
  const mutation = useMutation({
    mutationFn: () => orderCreate(productId, phone, username),
    onSuccess: (data) => {
      <SuccessMessage data={data} />
    },
    onError: (error) => {
      console.error("Order creation failed: ", error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ productId, phone, username });
  };

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className={style.Container}>
        <div className={style.ProductNameContent}>
          <h2>{data.product.productname}</h2>
        </div>
        <div className={style.Product}>
          <div className={style.ProductImage}>
            <Carousel
              className={style.Carousel}
              interval={3500}
              showThumbs={false}
              infiniteLoop={true}
              autoPlay={true}
              emulateTouch={true}
            >
              {data.product.image.map((imgSrc, index) => (
                <div key={index}>
                  <LazyLoadImage
                    src={`${BASE_URL}/${imgSrc}`}
                    alt={`Product Image ${index + 1}`}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className={style.ProductInfo}>
            <div className={style.Order}>
              <form onSubmit={handleSubmit}>
                <input
                  id="username"
                  name="username"
                  onChange={(e) => setUser(e.target.value)}
                  placeholder="Ф.И.О"
                  required
                />
                <input
                  id="phone"
                  name="phone"
                  placeholder="+998 (__) ___-__-__"
                  ref={inputRef}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <button type="submit">Chegirmani Qo`lga Kiritish</button>
              </form>
            </div>
            <div className={style.SoldOut}>
              <p>
                Bugunning ozida{" "}
                <span style={{ color: "red" }}>{data.product.soldOut}</span>{" "}
                martda Xarid Qilishdi
              </p>
            </div>
          </div>
        </div>
      </div>
      <InfoImage url={data.product.image} />
      <div className={style.ProductInfoText}>
        <div className={style.Text}>
          <p>{data.product.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
