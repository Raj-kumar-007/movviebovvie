import { ThemeProvider, createTheme } from "@mui/material";
import { router } from "../router/Router";
import { RouterProvider } from "react-router-dom";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: red,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
