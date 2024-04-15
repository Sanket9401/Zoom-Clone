import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      Navbar
      {children}
      Footer
    </div>
  );
};

export default RootLayout;
