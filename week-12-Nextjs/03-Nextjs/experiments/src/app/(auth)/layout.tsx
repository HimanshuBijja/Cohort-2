import React from "react";

type layoutType = {
  children: React.ReactNode;
};

export default function layout({ children }: layoutType) {
  return (
    <div>
      <div>Auth page</div>
      {children}
      <div>auth footer</div>
    </div>
  );
}
