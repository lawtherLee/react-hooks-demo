import React, { useContext } from "react";
import "./index.scss";
import CarContext from "../../context/CarContext";
export default function MyCount({ row }) {
  const { changeCount } = useContext(CarContext);

  return (
    <div className="my-counter">
      <button
        onClick={() => changeCount(row.id, row.goods_count - 1)}
        type="button"
        className="btn btn-light"
      >
        -
      </button>
      <input
        type="number"
        className="form-control inp"
        value={row.goods_count}
        readOnly
      />
      <button
        onClick={() => changeCount(row.id, row.goods_count + 1)}
        type="button"
        className="btn btn-light"
      >
        +
      </button>
    </div>
  );
}
