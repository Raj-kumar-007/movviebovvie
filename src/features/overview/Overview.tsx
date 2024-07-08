import { Box } from "@mui/material";
import { WelcomeScreen } from "../body-1/WelcomeScreen";
import MenuHeader from "../header-1/MenuHeader";

export const Overview = () => {
  return (
    <Box>
      <MenuHeader />
      <WelcomeScreen />
    </Box>
  );
};
