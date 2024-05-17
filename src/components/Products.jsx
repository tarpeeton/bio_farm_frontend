import React from "react";
import style from "../css/Product.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Product = () => {
  return (
    <>
      <div className={style.Container}>
        <div className={style.Logo}>
          <LazyLoadImage src="https://ucarecdn.com/246da399-9e7e-4d71-ab88-e3f3640bd217/-/preview/100x100/" effect="blur"/>
          <h1>Bio Pharm</h1>

        </div>


        <div className={style.Products}>
          <div className={style.ProductItems}>
            <div className={style.ProductImage}>
              <LazyLoadImage src="https://ucarecdn.com/5662d71b-be0c-4293-9aaf-31b96e6260b6/-/preview/225x300/" effect="blur" />
            </div>
            <div className={style.ProductName}>
                <h3> Doroflex </h3>
            </div>
            <div className="Description">
                <p>D'OROFLEX - bu bo'g'imlarning harakatchanligini tiklash uchun mo'ljallangan tabiiy mahsulot. Bu shark xaftaga, xondroitin sulfat va D3 vitaminiga asoslangan biologik faol moddalar majmuasidir.</p>
            </div>
          </div>
        </div>
      </div>


      {/*  Animation  */}
      <div>
          <div className={style.wave}></div>
          <div className={style.wave}></div>
          <div className={style.wave}></div>
        </div>
    </>
  );
};

export default Product;
