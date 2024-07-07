import { Box, Button } from "@mui/material";
import { Header } from "./elements";
import { useNavigate } from "react-router-dom";

const MenuHeader = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <Header>
      <Box sx={{ ml: "auto", alignContent: "center" }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "primary" }}
          onClick={handleSignIn}
        >
          Sign in
        </Button>
      </Box>
    </Header>
  );
};

export default MenuHeader;
