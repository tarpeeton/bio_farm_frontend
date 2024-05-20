import React from "react";
import style from "../css/InfoImage.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BASE_URL } from "../service/url";
const InfoImage = ({ url }) => {
  return (
    <>
      <div className={style.ProductInfoImg}>
        <div className={style.InfoImage}>
          <LazyLoadImage effect="blur" src={`${BASE_URL}/${url[3]}`} />
        </div>
        <div className={style.InfoImage}>
          <LazyLoadImage effect="blur" src={`${BASE_URL}/${url[4]}`} />
        </div>
      </div>
    </>
  );
};

export default InfoImage ;
