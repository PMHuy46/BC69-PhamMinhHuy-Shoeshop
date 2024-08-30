import React from "react";
import { ShoeItem } from "./ShoeItem";
import { useSelector } from "react-redux";
import { ModalDetail } from "./ModalDetail";

export const ListShoe = () => {
  const { data } = useSelector((state) => state.btShoeReducer);

  return (
    <div className="row">
      {data.map((shoe) => {
        return (
          <div key={shoe.id} className="col-4 mt-3">
            <ShoeItem shoe={shoe} />
          </div>
        );
      })}
    </div>
    
  );
};
