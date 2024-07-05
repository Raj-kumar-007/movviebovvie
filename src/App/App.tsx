import { Box } from "@mui/material";
import Footer from "../features/Footer";
import Header from "../features/Header";
import Router from "../Router";

function App() {
  return (
    <Box>
      <Header />
      <Router />
      <Footer />
    </Box>
  );
}

export default App;
