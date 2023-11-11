import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./Route/Navbar";
import MyRoutes from "./Route/MyRoutes";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <MyRoutes />

        <Footer />
        <ToastContainer
          position="bottom-right"
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
    </>
  );
}

export default App;
