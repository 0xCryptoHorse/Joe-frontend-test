import React from "react";
import { AlertProvider } from "./provider.alert";
import ThemesProvider from "./provider.theme";
const AllProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemesProvider>
      <AlertProvider>
        {children}
      </AlertProvider>
    </ThemesProvider>
  );
};

export default AllProvider;
