import React from "react";
import { ListShoe } from "./ListShoe";
import { ModalDetail } from "./ModalDetail";
import { ModalCart } from "./ModalCart";

// import data from './data.json'

export const BtShoe = () => {
  return (
    <div className="container ">
      <h2 className="text-center">Shoe Shop</h2>
      <ListShoe />
    
      <ModalDetail />
      <ModalCart/>
    </div>
  );
};
