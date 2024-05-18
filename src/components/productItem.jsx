import React from 'react';
import { getSingleProduct } from "../service/api";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/loader";
import { useLocation } from 'react-router-dom';
import style from "../css/Item.module.css"
const ProductItem = () => {
    const location = useLocation();
    const productId = location.pathname.split('/').pop();

    const { isLoading, error, data } = useQuery({
        queryKey: ["singleProduct", productId],
        queryFn: () => getSingleProduct(productId),
    });

    if (isLoading) return <Loader />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className={style.Container}>
           
        </div>
    );
};

export {ProductItem}
