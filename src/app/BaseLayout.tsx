import { Box } from "@mui/material";
import { ReactNode } from "react";

export const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      style={{
        height: "100vh",
        backgroundImage:
          "linear-gradient(to top, rgba(17, 135, 190, 0.842) 0, rgba(0, 0, 0, 0) 60%)",
      }}
    >
      {children}
    </Box>
  );
};
