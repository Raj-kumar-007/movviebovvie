import { Box, Button } from "@mui/material";
import { Header } from "./elements";

const MenuHeader = () => {
  return (
    <Header>
      <img
        width={250}
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="background"
      />
      <Box sx={{ ml: "auto", alignContent: "center" }}>
        <Button variant="contained" sx={{ backgroundColor: "red" }}>
          Sign in
        </Button>
      </Box>
    </Header>
  );
};

export default MenuHeader;
