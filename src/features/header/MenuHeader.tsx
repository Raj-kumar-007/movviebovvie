import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FlexBox from "../../components/FlexBox";

const MenuHeader = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "space-between" }}>
      <FlexBox></FlexBox>
      <FlexBox
        sx={{ alignItems: "center", justifyContent: "flex-end" }}
        gap={2}
      >
        <FlexBox>
          <Typography variant="h4">Home</Typography>
        </FlexBox>
        <FlexBox>
          <Typography variant="h4">Movies</Typography>
        </FlexBox>
        <FlexBox>
          <Typography variant="h4">TV List</Typography>
        </FlexBox>
        <FlexBox sx={{ height: "5rem", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "primary", my: "1rem" }}
            onClick={handleSignIn}
          >
            Sign in
          </Button>
        </FlexBox>
      </FlexBox>
    </Container>
  );
};

export default MenuHeader;
