import { Paper } from "@mui/material";
import { ReactNode } from "react";

export const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Paper
      style={{
        height: "100vh",
        backgroundImage:
          "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url('https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/51fcef6e-48ec-4f66-bef2-e16c24c1ffc5/CA-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_46c2cc31-8634-44ee-8692-8a394e3ed56a_large.jpg')",
      }}
    >
      {children}
    </Paper>
  );
};
