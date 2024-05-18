import React, { useState } from "react";
import { getSingleProduct, orderCreate } from "../service/api";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useQuery, useMutation } from "@tanstack/react-query";
import Loader from "../components/loader";
import { useLocation } from "react-router-dom";
import style from "../css/Item.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BASE_URL } from "../service/url";
import { useMask } from "@react-input/mask";

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
      console.log(data);
    },
    onError: (error) => {
      console.error("Order creation failed: ", error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(productId, phone, username);
  };

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className={style.Container}>
      <div className={style.ProductNameContent}>
        <h2>{data.product.productname}</h2>
      </div>
      <div className={style.Product}>
        <div className={style.ProductImage}>
          <Carousel className={style.Carousel}>
            {data.product.image.map((imgSrc, index) => (
              <div key={index}>
                <img src={`${BASE_URL}/${imgSrc}`} alt={`Product Image ${index + 1}`} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className={style.ProductInfo}>
          <div className={style.Order}>
            <form onSubmit={handleSubmit}>
              <input onChange={(e) => setUser(e.target.value)} placeholder="Ф.И.О" />
              <input
                placeholder="+998 (__) ___-__-__"
                ref={inputRef}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <button type="submit">Chegirmani Qo'lga Kiritish</button>
            </form>
          </div>
          <div className={style.SoldOut}>
            <p>
              Bugunning ozida <span style={{ color: "red" }}>{data.product.soldOut}</span> martda Xarid Qilishdi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductItem };
