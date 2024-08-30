import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { btShoeActions } from "../store/BtShoe/slice";

export const ModalCart = () => {
  const { cartShoe } = useSelector((state) => state.btShoeReducer);
  const dispatch = useDispatch();

  return (
    <div
      className="modal fade "
      id="modalCart"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Detail Shoe
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <table className="table">
              <thead>
                <tr>
                  <td>stt</td>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Image</td>
                  <td>Quantity</td>
                  <td>Total</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {cartShoe.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.price}</td>
                      <td>
                        <img
                          style={{ width: 100, height: 100 }}
                          src={item.image}
                          alt=""
                        />
                      </td>
                      <td>
                        <div className="d-flex gap-3 align-items-center">
                          <button
                            className="btn btn-outline-dark w-25"
                            onClick={() => {
                              dispatch(
                                btShoeActions.changeCartQuantity({
                                  id: item.id,
                                  quantity: 1,
                                })
                              );
                            }}
                          >
                            +
                          </button>
                          <span style={{ width: 30, textAlign: "center" }}>
                            {item.cartQuantity}
                          </span>
                          <button
                            className={cn("btn btn-outline-dark w-25", {
                              abc: true,
                              name: false,
                              disabled: item.cartQuantity == 1,
                            })}
                            onClick={() => {
                              dispatch(
                                btShoeActions.changeCartQuantity({
                                  id: item.id,
                                  quantity: -1,
                                })
                              );
                            }}
                          >
                            -
                          </button>
                        </div>
                      </td>
                      <td>{item.cartQuantity * item.price}</td>
                      <td
                        className="text-danger fw-blod "
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          console.log("delete")
                          dispatch(btShoeActions.deleteShoe(item.id))
                        }}
                      >
                        X
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
