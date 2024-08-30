import React from "react";
import { useDispatch } from "react-redux";
import { btShoeActions } from "../store/BtShoe/slice";

export const ShoeItem = (props) => {
  const { shoe } = props;
  const dispatch = useDispatch();
  //   console.log(shoe)
  return (
    <div>
      <div
        style={{ cursor: "pointer" }}
        data-bs-toggle="modal"
        data-bs-target="#modalDetail"
        onClick={() => {
          dispatch(btShoeActions.handleDetail(shoe));
        }}
      >
        <img src={shoe.image} alt="..." className="img-fluid px-5" />
        <p className="fs-4 fw-bold">{shoe.name}</p>
        <p className="fs-5 m-0">Price: {shoe.price}</p>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalCart"
        onClick={() => {
          dispatch(btShoeActions.addToCart(shoe));
        }}
      >
        add to cart
      </button>
    </div>
  );
};
