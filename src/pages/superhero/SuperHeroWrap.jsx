import React from "react";
import { Outlet } from "react-router";

export const SuperHeroWrap = () => {
  return (
    <div>
      <div>sherover</div>
      <Outlet />
    </div>
  );
};
