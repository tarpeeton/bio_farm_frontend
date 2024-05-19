import React from "react";
import style from "../css/InfoImage.module.css";
const InfoImage = ({ url }) => {
  return (
    <>
      <div className={style.ProductInfoImg}>
        <div className={style.InfoImage}>
          <img src="https://ucarecdn.com/14dbc228-ecf3-46f4-bfde-da9cc216b0d9/-/preview/526x526/" />
        </div>
        <div className={style.InfoImage}>
          <img src="https://ucarecdn.com/0e99c45e-b42a-42b1-8f1b-5365dc228b71/-/preview/526x526/" />
        </div>
      </div>
    </>
  );
};

export { InfoImage };
