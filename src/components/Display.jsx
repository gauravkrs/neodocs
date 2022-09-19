import React from "react";

export const Display = ({ info }) => {
  const detail = info.children.filter(
    (child) => child.childrenBox === true
  ).length;
  if (detail === 0) return;
  return (
    <div>
      <div>
        <li>{info.teacher}</li>
      </div>
      {info.children.map(
        (el) =>
          el.childrenBox && (
            <div>
              <ul>
                <li>{el.value}</li>
              </ul>
            </div>
          )
      )}
    </div>
  );
};
