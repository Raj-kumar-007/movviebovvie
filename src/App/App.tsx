import { ThemeProvider, createTheme } from "@mui/material";
import { router } from "../router/Router";
import { RouterProvider } from "react-router-dom";
import { red } from "@mui/material/colors";
import { BaseLayout } from "./BaseLayout";

const theme = createTheme({
  palette: {
    primary: red,
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BaseLayout>
        <RouterProvider router={router} />
      </BaseLayout>
    </ThemeProvider>
  );
};

export default App;
