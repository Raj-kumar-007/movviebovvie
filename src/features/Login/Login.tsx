import { Box, Button, TextField } from "@mui/material";
import { Form } from "react-router-dom";

const Login = () => {
  return (
    <Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
      <Form method="POST" className="form">
        <TextField label="Email" variant="outlined" name="email"/>
        <TextField label="Password" variant="outlined" name="password"/>
        <Button type="submit" variant="contained">
          Login 
        </Button>
      </Form>
      </Box>
  );
};

export default Login;
