import React from "react";
import { useSelector } from "react-redux";

export const ModalDetail = () => {
  const { productDetail } = useSelector((state) => state.btShoeReducer);

  return (
    <>
      <div
        className="modal fade "
        id="modalDetail"
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
              {productDetail ? (
                <div className="row">
                  <div className="col-4">
                    <img
                      src={productDetail.image}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="col-8">
                    <p className="fw-bold fs-3">{productDetail.name}</p>
                    <p>${productDetail.price}</p>
                    <p>{productDetail.description}</p>
                  </div>
                </div>
              ) : (
                <p>Không có sản phẩm</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
