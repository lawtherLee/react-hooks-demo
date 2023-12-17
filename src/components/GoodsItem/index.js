import React from "react";
import "./index.scss";
export default function GoodsItem({ row, updateState }) {
  return (
    <div className="my-goods-item">
      <div className="left">
        <div className="custom-control custom-checkbox">
          <input
            checked={row.goods_state}
            onChange={() => updateState(row.id)}
            type="checkbox"
            className="custom-control-input"
            id={row.id}
          />
          <label className="custom-control-label" htmlFor={row.id}>
            <img src={row.goods_img} alt="" />
          </label>
        </div>
      </div>
      <div className="right">
        <div className="top">{row.goods_name}</div>
        <div className="bottom">
          <span className="price">¥ {row.goods_price}</span>
          <span>counter组件</span>
        </div>
      </div>
    </div>
  );
}
