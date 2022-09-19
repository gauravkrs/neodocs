import React, { useEffect, useState } from "react";
import Style from "./nested.module.css";

export const Nested = ({ store, data, setData }) => {
  const handleCheck = (num) => {
    if (num === 0 && store.checked === false) {
      store.checked = true;
      store.children.map((el) => (el.childrenBox = true));
    } else if (num === 0 && store.checked === true) {
      store.checked = false;
      store.children.map((el) => (el.childrenBox = false));
    } else if (num !== 0) {
      store.children[num - 1].childrenBox =
        !store.children[num - 1].childrenBox;
      if (
        store.children[0].childrenBox === true &&
        store.children[1].childrenBox === true &&
        store.children[2].childrenBox === true &&
        store.children[3].childrenBox === true
      ) {
        store.checked = true;
      } else {
        store.checked = false;
      }
    }
    setData(!data);
  };

  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={store.checked}
          onChange={() => {
            handleCheck(0);
          }}
        />
        <label>{store.teacher}</label>
      </div>
      {store.children.map((el, index) => (
        <div key={index} className={Style.student}>
          <input
            type="checkbox"
            checked={el.childrenBox}
            onChange={() => handleCheck(index + 1)}
          />
          <label>{el.value}</label>
        </div>
      ))}
    </div>
  );
};
