import React from "react";
import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <>
      <Outlet />
      <div>Shop</div>
    </>
  );
};

export default Shop;
