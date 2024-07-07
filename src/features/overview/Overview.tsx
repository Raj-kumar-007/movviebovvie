import { Box } from "@mui/material";
import { WelcomeScreen } from "../body/WelcomeScreen";
import MenuHeader from "../header/MenuHeader";

export const Overview = () => {
  return (
    <Box sx>
      <MenuHeader />
      <WelcomeScreen />
    </Box>
  );
};
