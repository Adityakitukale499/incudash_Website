import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Route/Navbar";
import MyRoutes from "./Route/MyRoutes";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ mt: { md: "67px", xs: "0px" } }}>
      <BrowserRouter>
        <Navbar />
        <MyRoutes />

        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </Box>
  );
}

export default App;
